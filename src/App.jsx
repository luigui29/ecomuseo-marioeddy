import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Mapa from './Components/Mapa.jsx'
import BigCard from './Components/BigCard.jsx'
import Card from './Components/Card.jsx'
import Gallery from './Components/Gallery.jsx'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      
      <main>
        <Hero/>
        
        <section className="section">
          <div className="container">
            <h2 className="section-title">Nuestro Museo</h2>
            <Card 
              title="Experiencia Cultural Única" 
              description="Descubre la magia de los títeres tradicionales en un espacio diseñado para preservar y compartir este arte milenario."
              buttonText="Conoce más"
            />
          </div>
        </section>
        
        {/* Sección Sobre Nosotros */}
        <section className="py-5 bg-light" id="about">
          <div className="container">
            <h2 className="text-center mb-5">Sobre el Ecomuseo</h2>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-content pe-md-5">
                  <h3 className="mb-4">Nuestra Historia</h3>
                  <p className="lead">Fundado en -----, preservamos la tradición titiritera con más de 500 piezas históricas.</p>
                  <p>Desde nuestros inicios hemos trabajado para rescatar y difundir este arte tradicional.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-content ps-md-5">
                  <h3 className="mb-4">Misión y Visión</h3>
                  <p className="lead">Promovemos los títeres como patrimonio cultural vivo.</p>
                  <p>Buscamos ser referencia internacional en preservación y enseñanza de este arte.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Galería */}
        <section className="py-5">
          <div className="container">
            <Gallery/>
          </div>
        </section>
        
        {/* Sección Visitas */}
        <section className="py-0 bg-light border border-2 mb-5 ms-5 me-5">
          <div className="container mx-0 px-0 mw-100" style={{height: "20em"}}>
            <BigCard />
          </div>
        </section>
      </main>
      
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>  Ecomuseo de Títeres Marioeddy - Todos los derechos reservados</p>
          <div className="social-links mt-3">
            <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
