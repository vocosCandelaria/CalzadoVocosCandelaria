import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {
    const [contador, setContador]=useState (0);
    let stock = 5
    function sumar (params){
        if(contador<stock){
            setContador(contador + 1)
        }
    }
    function restar (params){
        if(contador>0){
            setContador(contador - 1)
        }
    }
    function resetear (params){
        setContador(0)
    }
        
  return (
      <>
    <div className="bodyCount">
        <button type="button" className="btn btn-light btn-sm" onClick={restar}>-</button>
        <h2 style={{color:"white"}}>{contador}</h2>
        <button type="button" className="btn btn-light btn-sm" onClick={sumar}>+</button>
    </div>
    {/* <div style={{margin:"2 auto", padding:"1rem"}}> */}
    <div className="d-grid gap-2 m-4">
    <button type="button" className="btn btn-sm" onClick={resetear}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount