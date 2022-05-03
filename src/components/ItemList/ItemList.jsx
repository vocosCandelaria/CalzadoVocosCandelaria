import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ muebles }) => {

    return (
        <div className='d-flex'>
            {
            muebles.length > 0 ? (muebles.map((mueble) => ( 
                <>
            <Item
            imagen={mueble.imagen}
            nombre={mueble.nombre}
            precio={mueble.precio}
            descripcion={mueble.descripcion}
            alt={mueble.alt}
            />
            </>
            )
            )) : (
                
                    <h1>Cargando...</h1>
                )
                }
        </div>
    )
}
export default ItemList;