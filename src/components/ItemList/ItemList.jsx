import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {

    return (
        <div className='d-flex'>
            {
            products.length > 0 ? (products.map((item) => ( 
                <>
            <Item
            key={item.id}
            id={item.id}
            imagen={item.imagen}
            nombre={item.nombre}
            precio={item.precio}
            descripcion={item.descripcion}
            alt={item.alt}
            />
            </>
            )
            )) : (
                
                    <h1>Cargando...</h1>
                )
                }
        </div>
    );
};
export default ItemList;