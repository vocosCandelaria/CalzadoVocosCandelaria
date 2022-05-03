import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item';

const ItemListContainer = () => {
  const [muebles, setMuebles] = useState([]);

  const sillones = [
    { index:1, nombre: 'Conrado', descripcion: '1 cuerpos',precio:180, imagen:'https://http2.mlstatic.com/D_NQ_NP_2X_887183-MLA33028429244_112019-F.webp' },
    { index:2, nombre: 'Retro',descripcion: '2 cuerpos con esquinero',precio:280, imagen:'https://d2r9epyceweg5n.cloudfront.net/stores/001/656/027/products/sofa-esquinero-kansas-2-cuerpos-chenille-gris-11-c8cb203ae01ed184b716318958424032-640-0.jpg' }, 
    { index:3, nombre: 'Vicente',descripcion: '3 cuerpos',precio:380, imagen:'https://d3ugyf2ht6aenh.cloudfront.net/stores/275/965/products/agatha11-134a3e19ed537e855c16106421974659-640-0.png' },
    { index:4, nombre: 'Nappe',descripcion: '4 cuerpos',precio:480, imagen:'https://falabella.scene7.com/is/image/Falabella/7251455_1?wid=800&hei=800&qlt=70' }];

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sillones);
      }, 2000);
    });
    pedido.then((res) => {setMuebles(res);},(err)=>{console.log("error",err);}
    )
    .then(()=>console.log(muebles))
    .catch((err) => console.log(err));
    console.log(pedido);
  }, []);


  return (
    <div className='ItemListContainer'>
      <ItemList muebles={muebles} />
    </div>
  )
}
export default ItemListContainer;