import React from 'react'
import './Categoria.css'
import { Link } from 'react-router-dom';

const Categoria = ({ imagen, alt, nombre, cat }) => {
    return (
        <div className='containerCategoria col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex'>
            <div className='cardCategoria'>
                <Link to={`/ItemListContainer/${cat}`} className="contCategoria">
                    <img className='imagenCategoria' src={imagen} alt={alt} />
                    <div className='capaHover'>
                        <h4 className='nombreCard text-center align-middle'>{nombre}</h4>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Categoria