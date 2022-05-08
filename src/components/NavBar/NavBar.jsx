import React from 'react'
import logo from '../Images/LogoMorada.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#D2B4DE" }}>
            <div className="container-fluid" style={{ justifyContent: "space-between" }}>
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="la morada" width="auto" height="30" style={{ margin: "1rem" }} className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">SOBRE NOSOTROS</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ backgroundColor: "#D2B4DE"}}>
                                <li><a className="dropdown-item text-center" href="/" style={{ color: "white" }}>Sillones</a></li>
                                <li><a className="dropdown-item text-center" href="/" style={{ color: "white" }}>Mesas Ratoneras</a></li>
                                <li><a className="dropdown-item text-center" href="/" style={{ color: "white" }}>Alfombras</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <div style={{ marginRight: "2rem"}}>
                        <CartWidget />
                </div>
            </div>
        </nav>





        // <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#D2B4DE"}}>
        //     <div className="container-fluid">
        //     <a className="navbar-brand" href="/"><img src={logo} alt="la morada" width="auto" height="30" style={{margin:"1rem"}} className="d-inline-block align-text-top" /></a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse d-flex" style={{justifyContent:"space-between"}}id="navbarNavDropdown">
        //             <ul className="navbar-nav justify-content-start">
        //                 <li className="nav-item" >
        //                     <a className="nav-link active" style={{color:"white"}} aria-current="page" href="/">INICIO</a>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle"style={{color:"white"}} href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         PRODUCTOS
        //                     </a>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                         <li><a className="dropdown-item" href="/">Sillones</a></li>
        //                         <li><a className="dropdown-item" href="/">Juego de Comedor</a></li>
        //                         <li><a className="dropdown-item" href="/">Telas</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" style={{color:"white"}} href="/">SOBRE NOSOTROS</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" style={{color:"white"}} href="/">CONTACTO</a>
        //                 </li>
        //             </ul >
        //             <div style={{marginRight:"2rem"}}>
        //                 <CartWidget/>
        //             </div>

        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar