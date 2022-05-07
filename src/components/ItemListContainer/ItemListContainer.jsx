import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { item } from '../Config/index';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    });
    pedido
    .then((res) => {
      setProducts(res);})
    .then(()=>console.log (products))
    .catch((err)=>console.log("error",err))
    console.log(products)
  }, []);

  return (
    <div className='ItemListContainer'>
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer;