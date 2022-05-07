import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({id,imagen, nombre, precio, descripcion, alt}) => {

    return (

        <div className="card m-5" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" alt={alt} />
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h5 className="card-title">{precio}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="/" className="btn btn-primary">Agregar al carrito</a>
        <div className='m-2'>
        <Link to={`/ItemDetailContainer/${id}`} className="btn btn-primary">Ver mas</Link>
        </div>
        </div>
        </div>
    )
}

export default Item