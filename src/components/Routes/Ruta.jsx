import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Ruta = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/ItemDetailContainer/:ItemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ruta