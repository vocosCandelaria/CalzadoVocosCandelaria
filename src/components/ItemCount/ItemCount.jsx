import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador]=useState (1);
    function sumar (params){
        if(contador<stock){
            setContador(contador + 1)
        } else{
            alert("No hay mas stock de este producto. Puede volver al inicio para seguir buscando")
        }
    }
    function restar (params){
        if(contador>=1){
            setContador(contador - 1)
        }
    }

        
  return (
      <>
    <div className="bodyCount">
        <button type="button" className="btn btn-light btn-sm" onClick={restar}>-</button>
        <h2 style={{color:"white"}}>{contador}</h2>
        <button type="button" className="btn btn-light btn-sm" onClick={sumar}>+</button>
    </div>
    <div className="d-grid gap-2 m-4">
    <button type="button" className="btn btn-sm" onClick ={() => onAdd (contador)}>Agregar al carrito</button>
    </div>

    </>
  )
}

export default ItemCount