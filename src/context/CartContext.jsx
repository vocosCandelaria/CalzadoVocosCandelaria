import React, { createContext, useState } from 'react'
import Swal from "sweetalert2";

export const GlobalContext=createContext('') //primero creo el contexto

const CartContext = ({children}) => { //le digo que voy a pasarle muchos hijos

    const [carrito, setCarrito]=useState([])

    const addItem = (producto) => {
      if (isInCart(carrito, producto)) {
        setCarrito(joinItem(carrito, producto))
        Swal.fire({
          icon: 'error',
          title:'Ups!',
          text: 'El producto ya fue agregado anteriormente, dirijase al carrito de compras',
          showConfirmButton: false,
          timer: 3500
      })
      } else {
        setCarrito([...carrito, producto])
        Swal.fire({
          title: 'Genial!',
          icon: 'success',
          text: 'Se agrego el producto al carrito',
          showConfirmButton: false,
          timer: 3500
      })
      }
    };
  
    const removeItem = (id) =>{// Remover un item del cart usando su id
      const remove = carrito.filter(producto=>producto.id !== id);
      setCarrito(remove);
    }

    const clear =()=>{  // Remover todos los items   
      setCarrito([])
    }
    
    const totalCantidad = (producto)=>{  // agregar cierta cantidad de un ítem al carrito 
      return carrito.reduce((previous,producto)=> previous + producto.cantidad, 0)
    }

    const isInCart =(carrito, producto)=>{
      return carrito.some(x=> x.id===producto.id)
    }

    const joinItem = (carrito, producto) =>{
      return carrito.map((x) => {
        if(x.id === producto.id){
          x.quantity = producto.quantity;
          x.stock = producto.stock;
        }
        return x;
      } )
    };

    const totalPrecio=(carrito)=>{
      return carrito.reduce((previo,producto)=> previo + producto.precio * producto.contador, 0)
    }

  return ( //le digo que va a ser un proveedor y a quien? a todos sus hijos. En el value le digo que es lo que voy a proveer
      <GlobalContext.Provider value={{
        carrito,
        addItem,
        removeItem,
        clear,
        totalPrecio,
        totalCantidad,
        isInCart
        }}>
        {children}
      </GlobalContext.Provider>
  )

}

export default CartContext;