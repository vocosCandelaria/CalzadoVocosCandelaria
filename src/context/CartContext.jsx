import React, { createContext, useState } from 'react'

export const GlobalContext=createContext('') //primero creo el contexto

const CartContext = ({children}) => { //le digo que voy a pasarle muchos hijos

    const [carrito, setCarrito]=useState([])

    const addItem = (producto)=>{ // agregar cierta cantidad de un ítem al carrito
      setCarrito([...carrito,producto])
    }

  
    const removeItem = (id) =>{// Remover un item del cart usando su id
      const remove = carrito.filter(producto=>producto.id !== id);
      setCarrito(remove);
    }

    const clear =()=>{  // Remover todos los items   
      setCarrito([])
    }


  return ( //le digo que va a ser un proveedor y a quien? a todos sus hijos. En el value le digo que es lo que voy a proveer
      <GlobalContext.Provider value={{carrito, addItem, removeItem, clear}}>
        {children}
      </GlobalContext.Provider>
  )

}

export default CartContext;