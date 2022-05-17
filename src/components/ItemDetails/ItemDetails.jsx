//ItemDetail es la pantalla del datalle, la imagen aparece en grande y las especificaiones al costado
//Desde aca se agrega al carrito!

import ItemCount from '../ItemCount/ItemCount'
import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/CartContext'
import './ItemDetails.css'

const ItemDetails = ({detalleSillon:{id, stock, imagen, alt, precio, tapizado, descripcion2, tiempo, descripcion, nombre, categoria}}) => {
    
    const{carrito, addItem}=useContext (GlobalContext)

    const [quantityBuy,setQuantityBuy]=useState(false)
    
    const onAdd=(contador)=>{
        setQuantityBuy(true)
        console.log (contador)
    }

    const [estado,setEstado]=useState([])

    useEffect(() => {
      
    setEstado ({id, stock, imagen, alt, precio, descripcion,descripcion2,tapizado, tiempo, nombre, categoria})

    }, [nombre])

    console.log(carrito)

    return (
        <div className="container-fluid">
            <div className="row contenedorCard">
                <img className="imagen col-lg-6 col-md-6 col-sm-12" src={imagen} alt={alt} />
                <div className="bodyText col-lg-6 col-md-6 col-sm-12">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text text-start">{descripcion}</p>
                    <p className="card-text text-start">{descripcion2}</p>
                    <p className="card-text text-start">{tapizado}</p>
                    <p className="card-text text-start tiempo">{tiempo}</p>
                    {quantityBuy ? (
                            <Link to="/Cart" className="btn btn2" onClick={()=>addItem(estado)}>FINALIZAR COMPRA</Link>
                        ) : (<ItemCount stock={stock} onAdd={onAdd}/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemDetails