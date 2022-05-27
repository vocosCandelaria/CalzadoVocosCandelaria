import React, { useContext } from 'react';
import { GlobalContext } from '../../context/CartContext';
import Firebase from '../Firebase/Firebase';
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
      <div className="container">
                <form
                  onSubmit={onSubmit}
                  className="form needs-validation"
                  id="form"
                  noValidate
                >
                  <h1 className="pt-4">Formulario de contacto</h1>
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="form-group p-2">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleInput}
                          name="nombre"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group p-2">
                        <input
                          type="email"
                          className="form-control needs-validation"
                          onChange={handleInput}
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>                  
                      <div className="col-md-6">
                        <div className="form-group p-2">
                          <input
                            type="text"
                            className="form-control"
                            onChange={handleInput}
                            name="phone"
                            id="phone"
                            placeholder="Teléfono"
                            required
                          />
                        </div>
                      </div>        
                  </div>
                  <button
                    type="submit"
                    id="form"
                    className="btn btn-primary col-10 col-md-3 m-auto mt-4 p-2"
                    // onClick={() => SendCart()}
                    required
                  >
                    Finalizar compra
                  </button>
                </form>
              </div>
    </div>
  )
}

export default Cart