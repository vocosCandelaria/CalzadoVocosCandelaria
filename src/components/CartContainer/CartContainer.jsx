import React, { useContext } from 'react';
import { GlobalContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartBuy from '../CartBuy/CartBuy';
import Formulario from '../Formulario/Formulario';
import './CartContainer.css'
//import { BsInfoCircle } from "react-icons/bs";

const CartContainer = () => {

    const { carrito, clear, totalPrecio } = useContext(GlobalContext)

    return (
        <>
            <div className='container-fluid' style={{padding: "16px"}}>
                <h2 className='titulo text-uppercase'>Mi carrito</h2>
                <div>
                    {carrito.length > 0 && (
                        <div className='clear'>
                            <div onClick={() => clear(carrito)} className='vaciar'>
                                <span className="volver ">Vaciar carrito</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                            </div>
                        </div>
                    )}
                </div>

                {carrito.length > 0 ?
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm12'>
                            <div className='contenedorCartBuy contenedor'>
                                {carrito.map((item, index) => <CartBuy key={index} item={item} />)}
                            </div>
                            <div>
                                <Link to={`/ItemListContainer`} className="btn text-uppercase btnItem" style={{height:'2.7rem'}}>
                                    Seguir comprando
                                </Link>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12 col-sm12'>
                            <Formulario totalPrecio={totalPrecio(carrito)} items={carrito} />
                        </div>
                    </div>
                    :
                    (
                        <div className='contCarritoVacio'>
                            <div className='alert alert-info' role="alert">
                                <div className='mr-2'>El carrito de compras está vacío</div>
                            </div>
                            <div className="m-5 text-center">
                                <Link to={`/ItemListContainer`} className='volver'>Volver a la tienda</Link>
                            </div>
                        </div>
                    )}
            </div>


        </>
    )
}

export default CartContainer