import React, { useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { item } from '../Config/index'
import ItemDetails from '../ItemDetails/ItemDetails'

const ItemDetailContainer=()=>{
   
    const [detalleSillon, setDetalleSillon] = useState(null);
    const {ItemId}=useParams();
    const filtrado=item.find((item)=>item.id===Number(ItemId)) 

    const obtenerItem=()=>{
        const pedir= new Promise ((resolve,reject)=>{
            setTimeout(() => {
            resolve(filtrado);
           }, 2000);
            })
            pedir 
            .then((res)=> {
                setDetalleSillon (res) 
            })  
            .then(()=>console.log(detalleSillon))  
            .catch((err)=>console.log(err));
            console.log(detalleSillon)
            return () => {}
    }

    useEffect(() => {
        obtenerItem()
        return () => {}
    },[])

    return (
        <div className='ItemDetailContainer'>
        { detalleSillon ? (
            <ItemDetails detalleSillon={detalleSillon}/>
        )
        :(<div class="loadingio-spinner-ellipsis-zb3lckypqk"><div class="ldio-052vxcpm2cq5">
<div></div><div></div><div></div><div></div><div></div>
</div></div>)}
        </div>
    )
    }

export default ItemDetailContainer