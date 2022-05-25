import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import db from '../../service/firebase'
import { getDocs, collection, where, query } from 'firebase/firestore';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  const getData = async () => {

    const miColeccion = collection(db, 'index')

    try {
      
      const filtrado = categoria ? query(miColeccion, where('categoria', '==', categoria)) : miColeccion
      getDocs(filtrado)

        .then((datos) => {
          setProducts(datos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        })

      console.log(filtrado)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [categoria]);

  // const obtenerProductos=()=>{

  //   const promesa = new Promise((resolve, reject) => {
  //     setTimeout(() => {

  //       let filtrarCategoria = item

  //       if (CategoriaId === 'sillones'){
  //         filtrarCategoria=item.filter((producto => producto.categoria === 'SILLONES'))
  //       }

  //       if (CategoriaId === 'mesas'){
  //         filtrarCategoria=item.filter((producto => producto.categoria === 'MESAS RATONERAS'))
  //       }

  //       if (CategoriaId === 'alfombras'){
  //         filtrarCategoria=item.filter((producto => producto.categoria === 'ALFOMBRAS'))
  //       }

  //       resolve(filtrarCategoria)
  //     }, 2000);
  //   });

  //   promesa
  //   .then((res) => {
  //     setProducts(res)
  //   })
  //   .then(()=>console.log (products))
  //   .catch((err)=>console.log("error",err))

  //   console.log(products)

  //   return ()=> {
  //   }
  // };

  // useEffect(()=>{

  //   obtenerProductos()

  //   return ()=> {
  //   }
  // }, [CategoriaId]);

  return (

    <div className='container-fluid ItemListContainer'>
      <ItemList products={products} />
    </div>

  )
}
export default ItemListContainer;