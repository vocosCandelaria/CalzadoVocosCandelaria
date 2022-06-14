import React, { useState } from 'react'
import db from '../../service/firebase'
import {getDocs, collection, doc} from 'firebase/firestore';



const Firebase = () => {

    const [productos,setProductos]=useState([])
    const [producto,setProducto]=useState({})

    const fetchGetDataCollection = async ()=>{ //me trae la info de la base de datos
        try{
            const data= collection (db,"orders") //data es igual a la coleccion
            const col = await getDocs(data) //le paso la data de la coleccion y la guardo en col
            const response=col.docs.map(doc={id:doc.id,...doc.data()}) //ahora mapea y genero un objeto por cada id y lo guardo en response
            setProductos(response)
        }catch (error){
            console.log(error)
        }
    }

    const fetchGetIndividualProduct = async ({id})=>{ //ME SIRVE PARA EL ITEM DETAIL. me trae la info de la base de datos segun el id
        try{
            const document= doc (db,"index",id) //data es igual a la coleccion
            const response= response.data()
            let result=response.data()
            setProducto({id:response.id,... result})
        }catch (error){
            console.log(error)
        }
    }

    // const fetchGenerateTicket=async ({datos})=>{ //obtengo el dato que es todo el state (o sea el cliente con todos sus datos)
    //     try {
    //         const col=collection (db,"ordenes")
    //         const order = await addDoc(col,datos) //me agrega un nuevo producto en mi base de datos de firebase
    //         console.log(order.id)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fetchUpdateDoc = async ({id})=>{ //me trae la info de la base de datos
        const orderDoc=doc (db, "orders", id)
        try{
            // await updateDoc(orderDoc,{precio:24000})
            console.log("se actualizo correctamente")
        }catch (error){
            console.log(error)
        }
    }

  return {
    fetchGetDataCollection,
    fetchGetIndividualProduct,
    fetchGenerateTicket,
    fetchUpdateDoc
  }
}

export default Firebase