import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item';
import { item } from '../Config';

const ItemListContainer = () => {
  const [muebles, setMuebles] = useState([]);
  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });
    pedido.then((res) => {setMuebles(res);},(err)=>{console.log("error",err);}
    )
    .then(()=>console.log(muebles))
    .catch((err) => console.log(err));
    console.log(pedido);
  }, []);


  return (
    <div className='ItemListContainer'>
      <ItemList muebles={muebles} />
    </div>
  )
}
export default ItemListContainer;