import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Mapa from './Components/Mapa.jsx'
import Card from './Components/Card.jsx'
import Gallery from './Components/Gallery.jsx'

function App() {
  const [count, setCount] = useState(0)

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
        
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Ubicación</h2>
            <Mapa/>
          </div>
        </section>
        
        {/* Sección Sobre Nosotros */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Sobre el Ecomuseo</h2>
            <div className="row">
              <div className="col-md-6">
                <Card 
                  title="Nuestra Historia" 
                  description="Fundado en 2010, preservamos la tradición titiritera de la región con más de 500 piezas históricas."
                />
              </div>
              <div className="col-md-6">
                <Card 
                  title="Misión" 
                  description="Promover el arte de los títeres como patrimonio cultural vivo a través de exhibiciones y talleres educativos."
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Galería */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Galería</h2>
            <Gallery/>
          </div>
        </section>
        
        {/* Sección Visitas */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Visítanos</h2>
            <div className="row">
              <div className="col-md-6">
                <Card 
                  title="Horarios" 
                  description="Martes a Domingo: 9am - 5pm\nLunes: Cerrado"
                />
              </div>
              <div className="col-md-6">
                <Card 
                  title="Ubicación" 
                  description="Calle Principal #123, Ciudad Guayana\nEntrada general: $5"
                />
              </div>
            </div>
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
