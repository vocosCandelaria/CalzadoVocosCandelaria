import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetails from '../ItemDetails/ItemDetails'
import db from '../../service/firebase'
import { getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [detalleSillon, setDetalleSillon] = useState(null);
    const { itemId } = useParams();
    // const filtrado = item.find((item) => item.id === Number(ItemId))

    const obtenerItem = () => {

        const  miproducto= doc(db,'index',itemId)
        getDoc(miproducto)
        .then((prod)=>{
            setDetalleSillon({id:prod.id, ...prod.data()});

        })

        // const pedir = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(filtrado);
        //     }, 2000);
        // })
        // pedir
        //     .then((res) => {
        //         setDetalleSillon(res)
        //     })
        //     .then(() => console.log(detalleSillon))
        //     .catch((err) => console.log(err));
        // console.log(detalleSillon)
        // return () => { }
    }

    useEffect(() => {
        obtenerItem()
        return () => { }
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            {detalleSillon ? (
                <ItemDetails detalleSillon={detalleSillon} />
            )
                : (<div className="loadingio-spinner-ellipsis-zb3lckypqk">
                    <div className="ldio-052vxcpm2cq5">
                        
                    </div>
                </div>)}
        </div>
    )
}

export default ItemDetailContainer