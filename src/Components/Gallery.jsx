import React from 'react'
import './Gallery.css'
import image1 from '../assets/gallery/1.jpg'
import image2 from '../assets/gallery/2.jpg'
import image3 from '../assets/gallery/3.jpg'
import image4 from '../assets/gallery/4.jpg'
import image5 from '../assets/gallery/5.jpg'
import image6 from '../assets/gallery/6.jpg'

const Gallery = () => {
  const images = [
    { id: 1, src: {image1}, alt: 'Exhibición de títeres tradicionales' },
    { id: 2, src: {image2}, alt: 'Taller para niños' },
    { id: 3, src: {image3}, alt: 'Colección histórica' },
    { id: 4, src: {image4}, alt: 'Presentación en vivo' },
    { id: 5, src: {image5}, alt: 'Títeres internacionales' },
    { id: 6, src: {image6}, alt: 'Workshop para adultos' }
  ]

  return (
    <section className="gallery py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nuestra Galería</h2>
        <div className="row g-3">
          {images.map((image) => (
            <div key={image.id} className="col-md-4 col-6">
              <div className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="img-fluid rounded"
                  data-bs-toggle="modal" 
                  data-bs-target="#galleryModal"
                />
                <div className="gallery-caption">{image.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
