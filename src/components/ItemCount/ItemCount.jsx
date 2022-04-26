import React, {useState} from 'react'

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
    <div style={{display:"flex", width:"250px", justifyContent:"space-around", margin:"0 auto", padding:"2rem",background:"#66FEAF "}}>
        <button type="button" class="btn btn-light" onClick={restar}>-</button>
        <h1 style={{color:"white"}}>{contador}</h1>
        <button type="button" class="btn btn-light" onClick={sumar}>+</button>
    </div>
    <div style={{margin:"2 auto", padding:"2rem"}}>
    <button type="button" class="btn btn-light" onClick={resetear}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount