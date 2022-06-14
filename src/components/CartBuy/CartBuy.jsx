import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/CartContext';
import './CartBuy.css';

const CartBuy = ({ item: { imagen, nombre, categoria, contador, precio, id, alt } }) => {

  const { removeItem } = useContext(GlobalContext)

  return (
    
      <div className='contenedorTotal'>
        <div className='row d-flex contCartBuy'>
          <div className='col-lg-4 col-md-4 contImgCartBuy'>
            <img className='imgCartBuy' src={imagen} alt={alt} />
          </div>
          <div className='col-lg-4 col-md-4 contenedorDatosCompra'>
            <h4>{nombre}</h4>
            <p>Categoría: {categoria}</p>
            <p>Cantidad: {contador}</p>
            <p>Precio: ${precio}</p>
          </div>
          <div className='col-lg-4 col-md-4 contenedorSubTotal'>
            <p>Sub-total: ${contador * precio}</p>
            <div className='remove botonAgregar d-flex' onClick={() => removeItem(id)}>
              Eliminar
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartBuy