import React, { useContext } from 'react';
import { GlobalContext } from '../../context/CartContext';
import './Cart.css'

const Cart = () => {

  const { carrito, removeItem, clear } = useContext(GlobalContext)

  console.log(carrito)

  return (
    <div className='Card'>
      <div className='container'>
        {carrito.length > 0
          ? carrito.map((item, index) => {
            return (
              <div key={index}>
                <div className='d-flex contenedorCart'>

                  <figure>
                    <img className="img-cart" src={item.imagen} alt={item.alt} />
                  </figure>

                  <div className='d-flex flex-column justify-content-around'>
                    <div>{item.nombre}</div>
                    <div>{item.descripcion}</div>
                    <span>Total a pagar: {item.precio}</span>
                    <div className='botonesCart'>
                      <button className="btn m-2">Comprar</button>
                      <button className="btn m-2" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>

                  </div>
                </div>
                <div className='contenedorBotones'>
                <button className='btn btn-light btn-m m-2'>Comprar todo </button>
                <button onClick={() => clear(carrito)} className='btn btn-light btn-m m-2'> Vaciar carrito </button>
                </div>
              </div>

            )
          })

          :

          <h4 style={{ margin: 0 }}>Ningún producto ha sido añadido al carrito...</h4>
        }
      </div>
    </div>
  )
}

export default Cart