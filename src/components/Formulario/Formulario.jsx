import React, { useState, useContext } from 'react'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import Swal from "sweetalert2"
import { GlobalContext } from '../../context/CartContext';
import db from '../../service/firebase';
import './Formulario.css'

const Input = ({
    className,
    type,
    name,
    value,
    inputClassName,
    onChange,
    onBlur,
    placeholder,
    error,
}) => {
    return (
        <div className={className}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={(e) => onBlur(e)}
                className={inputClassName}
                placeholder={placeholder}
            />
            {error.name && (
                <h6 className="text-danger my-2 text-uppercase">{error.name}</h6>
            )}
        </div>
    )
}

const validacion = (campos) => { //al menos un elemento del array cumple con la condición
    return campos.some((campo) => campo === "")
}

const Formulario = ({ items, totalPrecio }) => {

    const { clear } = useContext(GlobalContext); //llamo a clear

    const [error, setError] = useState({});

    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            apellido: "",
            email: "",
            telefono: ""
        },
        total: totalPrecio,
        items: items,
    })

    const fetchGenerateTicket = async ({ datos }) => {
        try {
            const coleccion = collection(db, "orders")
            const order = await addDoc(coleccion, datos)
            console.log(order.id)
            Swal.fire({
                title: "Genial!",
                text: "Su orden de compra se generó correctamente. El codigo es: "+ order.id,
                icon: "success",
                timer: 5000
            })
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUpdateDoc = async (item) => {

        const orderDoc = doc(db, 'index', item.id);

        try {
            await updateDoc(orderDoc, {
                stock: item.stock - item.contador
            });
            console.log("se actualizó correctamente")

        } catch (error) {
            console.log(error)
        }
    }

    const { buyer: { nombre, apellido, email, telefono } } = formulario;

    const onSubmit = (e) => {  // enviar el formulario una vez validado
        e.preventDefault();
        if (validacion([nombre, apellido, email, telefono])) {
            Swal.fire( //alert
                {
                    title: "Ups!",
                    text: "Faltan campos por completar",
                    icon: "error",
                }
            )
            return;
        }
        fetchGenerateTicket({ datos: formulario }).then(x => {
            items.forEach(item => fetchUpdateDoc(item))
        });
        clear();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value,
            },
        });
    };

    const handleBlur = (e) => {
        const { value, name } = e.target;
        if (value === "") {
            setError({ ...error, [name]: "Este campo es obligatorio" });
            return;
        }
        setError({});
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="container-fluid border contenedorFormulario">
                <h4 className="text-uppercase text-center my-4">datos</h4>
                {Object.keys(formulario.buyer).map((key, index) => (
                    <Input
                        key={index}
                        className="mb-3"
                        type="text"
                        name={`${key}`}
                        value={key.value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputClassName={`form-control ${error[key] && "is-invalid"}`}
                        placeholder={`${key}`}
                        error={error}
                    />
                ))}
                <div className="row d-flex">
                    <div className="col-6 col-lg-9">
                        <p className="fs-4 text-uppercase">TOTAL:</p>
                    </div>
                    <div className="col-6 col-lg-3">
                        <p className="price-card" align="right" style={{fontSize:"18px"}}>${totalPrecio}</p>
                    </div>
                </div>
                <div className="row d-flex botonformulario">
                        <button type="submit" className="btn botonAgregar text-uppercase terminarCompra ">terminar la compra</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario