import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Firebase from '../Firebase/Firebase';
import Swal from "sweetalert2"
import { GlobalContext } from '../../context/CartContext';


const Formulario = ({ total, compra }) => {

    const { clear } = GlobalContext();
    const { fetchGenerateTicket } = Firebase();

    const [error, setError] = useState({});
    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            apellido: "",
            email: "",
            telefono: ""
        },
        total: total,
        item: compra
    })

    const { buyer: { nombre, apellido, mail, telefono } } = formulario;

    const verLleno = (input) => {
        return input.some((input) => input === "")
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (verLleno([email, nombre, apellido, telefono])) {
            swal.fire(
                {
                    title: "Oops!",
                    text: "Faltan campos por completar",
                    icon: "error",
                }
            )
            return;
        }
        Swal.fire({
            title: "Genial!",
            text: "Su orden de compra se generó correctamente",
            icon: "success",
        })
        fetchGenerateTicket({ datos: formulario });
        clear();
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormulario({
            ...formulario, //una copia del forumalrio
            buyer: { //empiezo a sobreescribir el cliente
                ...formulario.buyer,
                [name]: value, //por cada nombre, apellido, mail, etc.. le pongo su valor. a eso le llame name. 
            }
        })
    }

    const handleBlur = (e) => {
        const { value, name } = e.targer;
        if (value == "") {
            setError({ ...error, [name]: "Este campo es obligatorio" });
            return;
        }
        setError({});
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="container border">
                <h3 className="text-uppercase text-center my-4">datos</h3>
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
                        error={error}
                    />
                ))}
                {
                    <Input
                        className="mb-3"
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputClassName={`form-control ${error.nombre && "is-invalid"}`}
                        placeholder="Ej: Cande"
                        error={error}
                    />
                }
                {<div className="mb-3">
                    <Input
                        type="text"
                        name="apellido"
                        value={apellido}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e)}
                        placeholder="Ej: vocos"
                        className={`form-control ${error.apellido && "is-invalid"}`}
                    />
                    {error.apellido && (
                        <h6 className="text-danger my-2 text-uppercase">{error.email}</h6>
                    )}
                </div>
                }
                {<div className="mb-3">
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e)}
                        placeholder="Ej: vocoscandelaria@gmail.com"
                        className={`form-control ${error.email && "is-invalid"}`}
                    />
                    {error.email && (
                        <h6 className="text-danger my-2 text-uppercase">{error.email}</h6>
                    )}
                </div>
                }
                {<div className="mb-3">
                    <Input
                        type="text"
                        name="telefono"
                        value={telefono}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e)}
                        placeholder="Ej: 3513573369"
                        className={`form-control ${error.telefono && "is-invalid"}`}
                    />
                    {error.telefono && (
                        <h6 className="text-danger my-2 text-uppercase">{error.telefono}</h6>
                    )}
                </div>
                }
                <div className="border row d-flex px-2">
                    <div className="col-12 col-lg-9">
                        <p className="fs-4 text-uppercase">total</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <p className="fs-4">${total}</p>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary text-uppercase w-100 my-4"
                    >
                        terminar la compra
                    </button>
                </div>

                <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">
                    volver a comprar
                </Link>
            </form>
        </div>
    )
}

export default Formulario