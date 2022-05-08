import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({ id, imagen, nombre, precio, descripcion, alt }) => {

    return (
<div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card m-2" style={{height:"90vh"}}>
                <img src={imagen} className="card-img-top"alt={alt} />
                <div className="card-body">
                    <h3 className="title-card">{nombre}</h3>
                    <h4 className="price-card">{precio}</h4>
                    <p className="card-text">{descripcion}</p>
                    <a href="/" className="btn">Agregar al carrito</a>
                    <div className='p-2'>
                        <Link to={`/ItemDetailContainer/${id}`} className="btn">Ver mas</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Item