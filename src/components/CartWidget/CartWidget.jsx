import React, { useContext } from 'react';
import { GlobalContext } from '../../context/CartContext';
import {Link} from 'react-router-dom'

const CartWidget = () => {

    const { carrito} = useContext(GlobalContext)
    

    return (
        <div className='d-flex justify-content-right'>
            <Link to={'/Cart'} >
                <svg xmlns="http://www.w3.org/2000/svg" color= "white" width="2rem" height="2rem" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </Link>
            <h4 className='item-count'style={{marginLeft:"1rem" , color:"white"}}>{carrito.length}</h4>
        </div>
    )
}

export default CartWidget