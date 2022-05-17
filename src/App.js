
import React from 'react';
import './App.css';
import Ruta from './components/Routes/Ruta';
import CartContext from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContext>
        <Ruta/>
      </CartContext>
      
    </div>
  );
}

export default App;
