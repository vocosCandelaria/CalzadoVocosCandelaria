import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({ items }) => {

    return (
        <div className='contenedorItemList'>
            {items ? (
                items.map((producto) => (
                    <Item
                        key={producto.id}
                        item={producto}
                    />
                )
                )) : (

                <h1><div className="loadingio-spinner-ellipsis-zb3lckypqk"><div className="ldio-052vxcpm2cq5">
                    <div></div><div></div><div></div><div></div><div></div>
                </div></div></h1>
            )
            }
        </div>

    );
};
export default ItemList;