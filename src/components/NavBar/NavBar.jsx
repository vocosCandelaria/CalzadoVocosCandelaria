import React from 'react'
import logo from '../Images/LogoMorada.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#D2B4DE" }}>
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
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ backgroundColor: "#D2B4DE" }}>
                                <li>
                                    <Link className="dropdown-item text-center" to="/ItemListContainer" style={{ color: "white" }}>Ver todo</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item text-center" to="/ItemListContainer/sillones" style={{ color: "white" }}>Sillones</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item text-center" to="/ItemListContainer/mesasRatoneras" style={{ color: "white" }}>Mesas Ratoneras</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item text-center" to="/ItemListContainer/alfombras" style={{ color: "white" }}>Alfombras</Link>
                                </li>
                            </ul>
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