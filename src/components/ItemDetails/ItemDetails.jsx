import ItemCount from '../ItemCount/ItemCount'
import React from 'react'
import './ItemDetails.css'

const ItemDetails = ({ item }) => {

    return (
        
        <div className="container-fluid">
            <div className="row">
                <img className="col-lg-6 col-md-12 col-sm-12" src={item.imagen} alt={item.alt} />
                <div className="bodyText col-lg-6 col-md-12 col-sm-12">
                    <p className='category'>Categoría: {item.categoria}</p>
                    <h5 className="card-title tituloContenedor">{item.nombre}</h5>
                    <p className="card-text text-start">{item.descripcion}</p>
                    <p className='subtitulo'>DESCRIPCIÓN:</p>
                    <p className="card-text text-start">{item.descripcion2}</p>
                    <p className="card-text text-start">{item.tapizado}</p>
                    <p className="card-text text-start tiempo">{item.tiempo}</p>
                    <p className="card-text text-start precio">${item.precio}</p>
                    <p className="card-text text-start "> Stock disponible: {item.stock}</p>
                    <ItemCount
                        item={item}
                        stock={item.stock} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetails