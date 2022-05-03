import React from 'react'

const Item = ({imagen, nombre, precio, descripcion, alt}) => {

    return (

        <div className="card m-5" style={{width: "18rem"}}>
            <img src={imagen} className="card-img-top" alt={alt} />
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h5 className="card-title">{precio}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="/" className="btn btn-primary">Agregar al carrito</a>
        </div>
        </div>
    )
}

export default Item