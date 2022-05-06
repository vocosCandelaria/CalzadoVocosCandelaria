import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ItemCount from '../ItemCount/ItemCount'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route index element ={<ItemListContainer/>}/>
            <Route patch="/itemDetail/:id" element ={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default routers