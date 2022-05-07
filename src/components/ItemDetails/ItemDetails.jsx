import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetails = ({ detalleSillon }) => {

    return (
        <div className="conteinerfluid m-5 d-flex">
            <img src={detalleSillon.imagen} className="imagen" alt={detalleSillon.alt} />
            <div className="cuerpoTexto">
                <h5 className="card-title">{detalleSillon.nombre}</h5>
                <p className="card-text">{detalleSillon.descripcion}</p>
                <h5 className="card-title">{detalleSillon.precio}</h5>
                <a href="/" className="btn btn-primary">Agregar al carrito</a>
            </div>
            <ItemCount/>
        </div>
    )
}

export default ItemDetails