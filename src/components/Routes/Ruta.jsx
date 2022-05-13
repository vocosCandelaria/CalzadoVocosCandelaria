import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Home from '../Home/Home'
import Layout from '../Layout/Layout'
import Contacto from '../Contacto/Contacto'
import Error from '../Error/Error'
import Cart from '../Cart/Cart'

const Ruta = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/ItemListContainer" element={<ItemListContainer />} />
            <Route path="/ItemDetailContainer" element={<ItemDetailContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/ItemDetailContainer/:ItemId" element={<ItemDetailContainer />} />
            <Route path="/ItemDetailContainer/:CategoriaId" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>


          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ruta