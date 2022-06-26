import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './ItemCount.css'

const ItemCount = ({ stock, item }) => {
    const [contador, setContador] = useState(1);
    const { carrito, addItem, isInCart } = useContext(GlobalContext);

    const producto = item && {
        ...item,
        contador,
    };

    const onAdd = () => {
        if (contador > 0) {
            addItem(producto);
        }
    }

    function sumar() {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            alert("No hay mas stock de este producto. Puede volver al inicio para seguir buscando")
        }
    }
    function restar() {
        if (contador > 1 ) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            {!isInCart(carrito, item) ? (
                <div className='container-fluid'>
                    <div className='row contador'>
                        <div className='col-lg-6 col-md-7 col-sm-6'>
                            <div className="bodyCount">
                                <span>Cantidad</span>
                                <div onClick={restar}>{'<'}</div>
                                <span className="contadorNumero">{contador}</span>
                                <div onClick={sumar}>{'>'}</div>
                            </div>
                        </div>
                        < div className='col-lg-6 col-md-5 col-sm-6 botonAgregar' style={{margin:"2%", maxWidth:"200px"}}>
                                <div type="button" className="link" onClick={() => onAdd(contador)}>Agregar al carrito</div>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <Link to={`/CartContainer`} className="volver">Ir al carrito</Link>
                    </div>
                    <div className='row'>
                            <div className="mt-5 text-center">
                                <Link to={`/ItemListContainer`} className="volver">Volver a la tienda</Link>
                            </div>
                    </div>
                </div>
            ) : (
                <>
                <div className="mt-5 text-center">
                    <Link to={`/ItemListContainer`} type="button" className=" botonAgregar">Seguir comprando</Link>
                </div>
                <div className="mt-5 text-center">
                <Link to={`/CartContainer`} className="volver">Ir al carrito</Link>
            </div>
            </>
            )}
        </>
    )
}

export default ItemCount