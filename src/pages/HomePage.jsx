import React from 'react'

// Components

import Hero from '../Components/Hero.jsx'
import BigCard from '../Components/BigCard.jsx'
import Card from '../Components/Card.jsx'
import Gallery from '../Components/Gallery.jsx'
import Footer from '../Components/sections/Footer.jsx'

// Assets
import decoracion_i from '../assets/decoraciones/DecoracionIzquierda.png'
import decoracion_d from '../assets/decoraciones/DecoracionDerecha.png'
import titere_1 from '../assets/titeres-1.png'
import titere_2 from '../assets/titeres-2.png'

const HomePage = () => {
  return (
    <div className="museum-background">
      <main>
        <Hero/>
        <section className="section py-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-auto d-flex align-items-center position-relative">
                <img 
                  src={decoracion_i} 
                  alt="decoración izquierda" 
                  className="img-fluid me-3 decoracion-titulo" 
                  id="decoracion-izquierda"
                />
                <h2 className="section-title subtitle-font mb-0 text-center position-relative homepage-titulo"><b>Nuestro EcoMuseo</b></h2>
                <img 
                  src={decoracion_d} 
                  alt="decoración derecha" 
                  className="img-fluid ms-3 decoracion-titulo" 
                  id="decoracion-derecha"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Card 
                  title="Experiencia Cultural Única" 
                  description="Descubre la magia de los títeres tradicionales en un espacio diseñado para preservar y compartir este arte milenario."
                  buttonText="Conoce más"
                  className="shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Sobre Nosotros */}
        <section className="py-5 bg-light position-relative" id="about" style={{marginBottom: "100px"}}>
          <div className="container position-relative z-index-1">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary mb-3">Sobre el Ecomuseo</h2>
              <div className="divider mx-auto bg-primary"></div>
            </div>

            <div className="row g-5 align-items-stretch">
              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-body p-4 p-md-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="icon-box bg-primary-light text-primary rounded-circle me-3">
                        <i className="bi bi-clock-history fs-3"></i>
                      </div>
                      <h3 className="mb-0">Nuestra Historia</h3>
                    </div>
                    <p className="lead fw-medium">Fundado en 2024, preservamos la tradición titiritera con más de 500 piezas históricas.</p>
                    <p className="mb-0">Desde nuestros inicios hemos trabajado incansablemente para rescatar, documentar y difundir este invaluable arte tradicional.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="card-body p-4 p-md-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="icon-box bg-primary-light text-primary rounded-circle me-3">
                        <i className="bi bi-stars fs-3"></i>
                      </div>
                      <h3 className="mb-0">Misión y Visión</h3>
                    </div>
                    <p className="lead fw-medium">Promovemos los títeres como patrimonio cultural vivo.</p>
                    <p className="mb-0">Aspiramos a ser reconocidos como referencia internacional en la preservación, investigación y enseñanza de este arte milenario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Titeres Decorativos */}
        <div className='visitanos-div'>
          <img src={titere_1} alt="titeres" id="visitanos-titere-1"/>
          <div className='subtitle-font visitanos-text'> <b>Visítanos!</b> </div>
          <img src={titere_2} alt="titeres" id="visitanos-titere-2"/>
        </div>

        {/* Sección Ubicación */}
        <div className='ubicacion-div'>
          <section className="py-0 bg-light border border-2 mb-5 ms-5 me-5">
            <div className="container mx-0 px-0 mw-100" style={{height: "25em"}}>
              <BigCard/>
            </div>
          </section>
        </div>
        
      </main>
      
     <Footer/>
    </div>
  )
}

export default HomePage
