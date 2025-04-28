import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const images = [
    { id: 1, src: '../assets/gallery/1.jpg', alt: 'Exhibición de títeres tradicionales' },
    { id: 2, src: '../assets/gallery/2.jpg', alt: 'Taller para niños' },
    { id: 3, src: '../assets/gallery/3.jpg', alt: 'Colección histórica' },
    { id: 4, src: '../assets/gallery/4.jpg', alt: 'Presentación en vivo' },
    { id: 5, src: '../assets/gallery/5.jpg', alt: 'Títeres internacionales' },
    { id: 6, src: '../assets/gallery/6.jpg', alt: 'Workshop para adultos' }
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
