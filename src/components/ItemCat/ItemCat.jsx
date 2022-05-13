import React, { useState, useEffect } from 'react'
import { Params, useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {item} from '../Item/Item'


const ItemCat = () => {
    const [categoria, setCategoria] = useState([])
    const { CategoryId } = useParams()

    const filtro = item.filter((item) => item.categoria === (CategoryId))

    const obtenerCategoria = () => {
        const pedirCategoria = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtro);
            }, 2000);
        })
        pedirCategoria
            .then((res) => {
                setCategoria(res)
            })
            .then(() => console.log(categoria))
            .catch((err) => console.log(err));
        console.log(categoria)
        return () => { }
    }
    useEffect(() => {
        obtenerCategoria()
        return () => { }
    }, [CategoryId])

    return (
        <div className='ItemDetailContainer'>
            {categoria ? (
                <ItemList categoria={categoria} />
            )
                : (<div className="loadingio-spinner-ellipsis-zb3lckypqk"><div className="ldio-052vxcpm2cq5">
                    <div></div><div></div><div></div><div></div><div></div>
                </div></div>)}
        </div>
    )
}

export default ItemCat