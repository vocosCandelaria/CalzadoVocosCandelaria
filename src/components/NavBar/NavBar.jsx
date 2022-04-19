import React from 'react'
import logo from '../../logo.svg'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                        LA MORADA
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUCTOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Sillones</a></li>
                                <li><a className="dropdown-item" href="#">Juego de Comedor</a></li>
                                <li><a className="dropdown-item" href="#">Telas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SOBRE NOSOTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTO</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar