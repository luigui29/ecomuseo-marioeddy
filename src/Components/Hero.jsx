import React from 'react'
import imagenPrincipal from '../assets/img-principal.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <>
    <div id="mainCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <div className="hero-container">
            <img src={imagenPrincipal} alt="Entrada del Ecomuseo" className="hero-image" />
          </div>
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2 className="text-white">Ecomuseo de Títeres Marioeddy</h2>
            <p className="text-white">Para ser Titiritero vivirás la historia de un viajero...</p>
          </div>
        </div>
        
        <div className="carousel-item" data-bs-interval="5000">
          <div className="hero-container">
            <img src={imagenPrincipal} alt="Exhibición de títeres" className="hero-image" />
          </div>
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2 className="text-white">Nuestra Colección</h2>
            <p className="text-white">Descubre títeres tradicionales de todo el mundo</p>
          </div>
        </div>
        
        <div className="carousel-item">
          <div className="hero-container">
            <img src={imagenPrincipal} alt="Taller de títeres" className="hero-image" />
          </div>
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2 className="text-white">Talleres Educativos</h2>
            <p className="text-white">Aprende el arte de la titiritería con nuestros maestros</p>
          </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>

    </div>
    <h1 className="text-center">Bienvenido al Ecomuseo de Títeres Marioeddy</h1>
    <p className="text-center">Para ser Titiritero vivirás la historia de un viajero...</p>

    </>

  )
}

export default Hero
