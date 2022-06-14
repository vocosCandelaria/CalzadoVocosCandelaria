import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({item:{ id, imagen, nombre, precio, descripcion, alt, categoria, stock},}) => {

    return (
        
<div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card m-2">
                <img src={imagen} className="card-img-top"alt={alt} />
                <div className="card-body">
                    <h3 className="title-card tituloContenedor">{nombre}</h3>
                    <p className="cardText">{descripcion}</p>
                    <h4 className="price-card ">${precio}</h4>
                    <div className='d-grid gap-2 d-md-block'style={{marginTop:"1rem"}}>
                        <Link to={`/ItemDetailContainer/${id}`} className="btnItem">Ver Detalle</Link>
                    </div>
                </div>
            </div>
    
    </div>

    )
}

export default Item