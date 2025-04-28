import React from 'react';
import '../styles.css';
import imagenPrincipal from '../assets/img-principal.jpeg';

const Card = ({ 
  title = 'Visita Nuestro Museo', 
  description = 'Explora nuestra colección única de títeres tradicionales',
  imageUrl = imagenPrincipal,
  buttonText = 'Más información'
}) => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={imageUrl} alt={title} className="card-img" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a href="#" className="btn-primary">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;
