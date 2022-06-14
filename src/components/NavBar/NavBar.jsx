import React from 'react'
import logo from '../Images/LogoMorada.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(192 157 153)" }}>
            <div className="container-fluid" style={{ justifyContent: "space-between" }}>
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="la morada" width="auto" height="30" style={{ margin: "1rem" }} className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">INICIO</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ backgroundColor: "rgb(192 157 153)" }}>
                                <Link to={`/ItemListContainer`} className="dropdown-item text-center linkMenu" style={{ color: "white" }}>VER TODO</Link>
                                <Link to={`/ItemListContainer/sillones`} className="dropdown-item text-center" style={{ color: "white" }}>SILLONES</Link>
                                <Link to={`/ItemListContainer/sillas`} className="dropdown-item text-center"  style={{ color: "white" }}>SILLAS</Link>
                                <Link to={`/ItemListContainer/mesas`} className="dropdown-item text-center"  style={{ color: "white" }}>MESAS</Link>
                                <Link to={`/ItemListContainer/mesasratoneras`} className="dropdown-item text-center"  style={{ color: "white" }}>MESAS RATONERAS</Link>
                                <Link to={`/ItemListContainer/alfombras`} className="dropdown-item text-center"  style={{ color: "white" }}>ALFOMBRAS</Link>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contacto">CONTACTO</NavLink>
                        </li>
                    </ul>
                </div>
                <div style={{ marginRight: "2rem" }}>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar