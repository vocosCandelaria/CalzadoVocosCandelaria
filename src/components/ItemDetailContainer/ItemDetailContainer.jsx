import React, { useState } from 'react'
import { useState } from 'react';
import { item } from '../Config'

const ItemDetailContainer=()=>{
    const {id}=useParams();
    const [sillon, setSillon] = useState(null);
    const filtrado=item.find((prod)=>prod.id===Number(id)) 

    useEffect(() => {
        const pedir= new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve(filtrado);
            }, 2000);
        pedir
        .then((res)=> {
            setSillon (res)
        })
        .then(()=>console.log(sillon))
        .catch((err)=>console.log(err));
    })
        console.log(sillon)
    }, []);
    return <div>ItemDetailContainer</div>
    };

    // return () => {
    //     <div className='ItemDetailContainer'>
    //         { producto ? <ItemDetail producto={producto}/>:<h1>cargando</h1>}
    //     </div>
    // }


export default ItemDetailContainer