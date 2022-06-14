import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import db from '../../service/firebase'
import { getDocs, collection, where, query } from 'firebase/firestore';
import Spiner from '../Spiner/Spiner';

const ItemListContainer = () => {

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {

    setLoading(true)

    const miColeccion = collection(db, 'index')

    const filtrado = categoria ? query(miColeccion, where('categoria', '==', categoria)) : miColeccion
    getDocs(filtrado)
      .then((datos) => {
        setProducts(datos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }).finally(() => {
        setLoading(false)
      })

  }, [categoria]);

  return (
    <>
      <div className='container-fluid ItemListContainer'>
        {categoria ? <h2 className='tituloContenedor text-uppercase'>{categoria}</h2> : <h2 className='tituloContenedor text-uppercase'>ver todos</h2>}
      </div>
      <div>
        {
          loading ? <div className="d-flex justify-content-center mt-5">
            <Spiner animation="border">
              <span className="visually-hidden"></span>
            </Spiner>
          </div>
            : <ItemList items={products} />
        }
      </div>
    </>
  )
}
export default ItemListContainer;