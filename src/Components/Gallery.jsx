import React, { useEffect } from 'react'
import './Gallery.css'
import image1 from '../assets/gallery/1.jpg'
import image2 from '../assets/gallery/7.jpg'
import image3 from '../assets/gallery/3.jpg'
import image4 from '../assets/gallery/4.jpg'
import image5 from '../assets/gallery/5.jpg'
import image6 from '../assets/gallery/6.jpg'

const Gallery = () => {
  {/*
  const images = [
    { id: 1, src: {image1}, alt: 'Exhibición de títeres tradicionales' },
    { id: 2, src: {image2}, alt: 'Taller para niños' },
    { id: 3, src: {image3}, alt: 'Colección histórica' },
 
  ]

  useEffect(()=>{
    console.log(images)
  },[images])
  
  {images.map ((image)=>
          <div key={image.id} className='col-lg-4 col-md-6 gallery-item'>
            <img src={image.src} alt={image.alt} className='img-fluid' />
            {console.log(image.src, image.alt)}
          </div>
          
          )}
  */}

  return (
    <section className="gallery py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nuestra Galería</h2>
          <div className='row my-3'>
            <div className="col-lg-4 col-md-6 gallery-item">
              <img src={image1} alt="Exhibicion" />
            </div>
            <div className="col-lg-4 col-md-6 gallery-item">
              <img src={image2} alt="Exhibicion" />
            </div>
            <div className="col-lg-4 col-md-6 gallery-item">
              <img src={image3} alt="Exhibicion" />
            </div>
          </div>
          <div className='row my-3'>
            <div className="col-lg-4 col-md-6 gallery-item">
              <img src={image4} alt="Exhibicion" />
            </div>
            <div className="col-lg-4 col-md-6 gallery-item">
              <img src={image5} alt="Exhibicion" />
            </div>
            <div className="col-lg-4 col-md-6 gallery-item">
              <img src={image6} alt="Exhibicion" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Gallery
