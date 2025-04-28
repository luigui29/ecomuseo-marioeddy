import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#000000"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="30" className="d-inline-block align-top me-2" />
          Ecomuseo Marioeddy
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link " href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Colección</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Talleres</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Visitas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
