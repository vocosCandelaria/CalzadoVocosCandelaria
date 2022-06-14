import React from 'react';
import Categoria from '../Categoria/Categoria';
import './Home.css';
import image from '../../Assets/sillonCeleste.jpg'
import WOW from 'wowjs';

const Home = () => {
  
  return (
    <>
      <div className='container-fluid imagenFondo'>
        <div className='titulosPortada'>
          <h2 className='tituloPortada WOW fadeInLeftBig'>Siéntete como en casa</h2>
          <h4 className='subtitulo'>Nos encanta el diseño limpio y las soluciones de mobiliario natural.</h4>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='cuadrante'>
          <h4 className='subtitulo'>Colaboramos con los mejores diseñadores y talentos para crear una colección en evolución.</h4>
        </div>
      </div>

      <div className='containerCat'>
        <div className='row'>
        <Categoria imagen={image} alt={'ver todo'} nombre={'VER TODO'} cat={''} />
        <Categoria imagen={'https://hnsfpau.imgix.net/5/images/detailed/106/Hogan-Sofa-Bed-01.jpg?fit=fill&bg=0FFF&w=785&h=523&auto=format,compress'} alt={'sillones'} nombre={'SILLONES'} cat={'sillones'}/>
        <Categoria imagen={'https://images.dfs.co.uk/i/dfs/forge_viewroomset?$dfs_v2_pdp_xl$&fmt=auto'} alt={'mesas'} nombre={'MESAS'} cat={'mesas'}/>
        <Categoria imagen={'https://media.revistaad.es/photos/61deea1989908dab06ec0dc4/16:9/w_1280,c_limit/5369029052_7_1_2.jpg'} alt={'alfombras'} nombre={'ALFOMBRAS'} cat={'alfombras'} />
        <Categoria imagen={'https://i.pinimg.com/564x/cd/72/07/cd7207806add010bbb6dcb6b71def422.jpg'} alt={'mesasratoneras'} nombre={'MESAS RATONERAS'} cat={'mesasratoneras'} />
        <Categoria imagen={'https://i.pinimg.com/564x/3e/d0/92/3ed09226da22be27602ac1ba2532640d.jpg'} alt={'sillas'} nombre={'SILLAS'} cat={'sillas'} />
        </div>
      </div>
     
    </>

  )
}


export default Home;