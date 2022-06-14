import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetails from '../ItemDetails/ItemDetails'
import db from '../../service/firebase'
import { getDoc, doc} from 'firebase/firestore';
import Spiner from '../Spiner/Spiner';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    const obtenerItem = async () => {

        const  miproducto= doc(db,'index',itemId) 

        try {
            const prod = await getDoc (miproducto)
            const resultado =  ({id:prod.id, ...prod.data()})
            setProduct (resultado)
            console.log (resultado)
            
          } catch (error) {
            console.log (error)
          }
    }

    useEffect(() => {
        obtenerItem()
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            {product ? (
                <ItemDetails item={product} />
            ) : (<Spiner/>)}
        </div>
    )
}

export default ItemDetailContainer