import ItemCount from '../ItemCount/ItemCount'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ItemDetails = ({detalleSillon}) => {
        
    const [quantityBuy,setQuantityBuy]=useState(false)
    
    const onAdd=(contador)=>{
        setQuantityBuy(true)
        console.log (contador)
    }

    return (
        <div className="container-fluid">
            <div className="row contenedorCard">
                <img className="imagen col-lg-6 col-md-6 col-sm-12" src={detalleSillon.imagen} alt={detalleSillon.alt} />
                <div className="bodyText col-lg-6 col-md-6 col-sm-12">
                    <h5 className="card-title">{detalleSillon.nombre}</h5>
                    <p className="card-text text-start">{detalleSillon.descripcion}</p>
                    <p className="card-text text-start">{detalleSillon.descripcion2}</p>
                    <p className="card-text text-start">{detalleSillon.tapizado}</p>
                    <p className="card-text text-start tiempo">{detalleSillon.tiempo}</p>
                    {quantityBuy ? (
                            <Link to="/Cart" className="btn btn2">FINALIZAR COMPRA</Link>
                        ) : (
                    <ItemCount 
                    stock={detalleSillon.stock}
                                onAdd={onAdd}
                    />
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetails