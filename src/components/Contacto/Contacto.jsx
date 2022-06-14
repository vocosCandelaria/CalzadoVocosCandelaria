import React from 'react'
import { Link } from 'react-router-dom'
import './Contacto.css'

const Contacto = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='imagenIzquierda col-xs-12 col-sm-12 col-md-6 col-lg-6'>

                    </div>
                    <div className='contenedorDerecha col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='bloque'>
                            <div className='contTituloContacto'>
                                <p className='titulo tituloContenedor text-uppercase mt-2'>Contactanos</p>
                            </div>
                            <p className='textContacto'>7 años brindando los mejores modelos de mobiliarios.
                                <br />
                                Muebles inspirados en los mejores diseños europeos. Producto de alta calidad con un diseño reconocido a nivel mundial, entregado en la puerta de tu negocio de manera fácil, rápida y con atención al detalle.</p>
                        </div>
                        <form className='formContacto'>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Nombre" aria-label="First name" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name" />
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" placeholder="teléfono" aria-label="Teléfono" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"></label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Escribinos tu consulta" rows="3"></textarea>
                            </div>
                            <div class="text-center pt-2">
                                <input type="submit" className="botonAgregar" data-toggle="modal"
                                    data-target="#myModal" >
                                </input>
                            </div>
                        </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto