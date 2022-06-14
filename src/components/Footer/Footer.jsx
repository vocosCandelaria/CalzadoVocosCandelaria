import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "rgb(192 157 153)" }}>
        <div className='row contFooter'>
          <div className="contIcono col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <Link to="https://api.whatsapp.com/send?phone=351357338" className='datosFooter' target="_blank">
              <i class="icono fa-brands fa-whatsapp"></i>
              <p  className='datosFooter'>+54 9 3513573398</p>
            </Link>
          </div>
          <div className="contIcono  col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <Link to="mailto:bionos@bionoslatinoamerica.com.ar" target="_blank" className='datosFooter'>
            <i class=" icono fa-solid fa-at"></i>
              <p  className='datosFooter'>lamoradahome@gmail.com</p>
            </Link>
          </div>
          <div className="contIcono  col-xs-12 col-sm-12 col-md-3 col-lg-3" >
            <Link to="https://goo.gl/maps/rZuX488R3Cs4cEs7A" target="_blank" className='datosFooter'>
            <i class="icono fa-solid fa-location-dot"></i>
              <p  className='datosFooter'>Av. Velez Sarsfield 478 - Córdoba Capital - Argentina</p>
            </Link>
          </div>
          <div className="contIcono  col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <Link to="https://www.instagram.com/bionoslatinoamerica/?hl=es-la" className='datosFooter'>
              <i class=" icono fa-brands fa-instagram"></i>
              <p className='datosFooter'>@lamoradahome</p>
            </Link>
          </div>
        </div>


      </div>

    </>
  )
}

export default Footer