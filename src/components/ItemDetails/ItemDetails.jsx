import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'
const ItemDetails = ({ detalleSillon }) => {

    return (
        <div className="conteinerfluid m-5 d-flex">
            <img src={detalleSillon.imagen} className="imagen" alt={detalleSillon.alt} />
            <div className="bodyText m-5">
                <h5 className="card-title">{detalleSillon.nombre}</h5>
                <p className="card-text text-start">{detalleSillon.descripcion}</p>
                <p className="card-text text-start">{detalleSillon.descripcion2}</p>
                <p className="card-text text-start">{detalleSillon.tapizado}</p>
                <p className="card-text text-start tiempo">{detalleSillon.tiempo}</p>
                <ItemCount/>
            </div>
            
        </div>
    )
}

export default ItemDetails