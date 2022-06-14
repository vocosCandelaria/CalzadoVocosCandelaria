import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Home from '../Home/Home'
import Layout from '../Layout/Layout'
import Error from '../Error/Error'
import CartContainer from '../CartContainer/CartContainer'
import Contacto from '../Contacto/Contacto'

const Ruta = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ItemListContainer" element={<ItemListContainer />} />
            <Route path="/ItemDetailContainer" element={<ItemDetailContainer />} />
            <Route path="/ItemDetailContainer/:itemId" element={<ItemDetailContainer />} />
            <Route path="/ItemListContainer/:categoria" element={<ItemListContainer />} />
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="/Contacto" element={<Contacto/>}/>
            
          </Route>


          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ruta