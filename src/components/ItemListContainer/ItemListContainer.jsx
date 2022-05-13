import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { item } from '../Config/index';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { CategoriaId } = useParams()

  const obtenerProductos=()=>{
  
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {

        let filtrarCategoria = item

        if (CategoriaId === 'sillones'){
          filtrarCategoria=item.filter((producto => producto.categoria === 'SILLONES'))
        }

        if (CategoriaId === 'mesas'){
          filtrarCategoria=item.filter((producto => producto.categoria === 'MESAS RATONERAS'))
        }

        if (CategoriaId === 'alfombras'){
          filtrarCategoria=item.filter((producto => producto.categoria === 'ALFOMBRAS'))
        }

        resolve(filtrarCategoria)
      }, 2000);
    });

    promesa
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
    
    obtenerProductos()

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