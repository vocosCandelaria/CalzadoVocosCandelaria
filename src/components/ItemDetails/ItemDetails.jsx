import React from 'react'
const ItemDetails = ({ imagen, nombre, precio, descripcion, alt }) => {

    return (
        <div className="conteinerfluid m-5 d-flex">
            <img src={imagen} className="imagen" alt={alt} />
            <div className="cuerpoTexto">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <h5 className="card-title">{precio}</h5>
                <a href="/" className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
        
    )
}

export default ItemDetails