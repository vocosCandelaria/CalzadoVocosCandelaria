import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { item } from '../Config/index';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const { CategoriaId } = useParams()

  const obtenerProductos=()=>{
  
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {

        let filtrarCategoria = item

        if (CategoriaId === 'sillones'){
          filtrarCategoria=item.filter((producto => producto.categoria === 'Sillones'))
        }

        if (CategoriaId === 'Mesas Ratoneras'){
          filtrarCategoria=item.filter((producto => producto.categoria === 'Mesas Ratoneras'))
        }

        if (CategoriaId === 'Alfombras'){
          filtrarCategoria=item.filter((producto => producto.categoria === 'Alfombras'))
        }

        resolve(filtrarCategoria)
      }, 2000);
    });
    pedido
    .then((res) => {
      setProducts(res)
    })
    .then(()=>console.log (products))
    .catch((err)=>console.log("error",err))
    console.log(products)
    return ()=> {
    }
  };

  useEffect(()=>{
    
    obtenerProductos ()

    return ()=> {
    }
  }, [CategoriaId]);

  return (
    <div className='container-fluid ItemListContainer'>
      <ItemList products={products} />
      
    </div>
  )
}
export default ItemListContainer;