import React, { useEffect, useState } from 'react'
import InteractiveButton from '../Components/InteractiveButton.jsx'
import '../styles/Collection.css'

//Assets
import cortinas from '../assets/decoraciones/curtains.png'

const Collection = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Efecto de carga para los elementos
    setLoaded(true)
  }, [])

  return (
    <main className='museum-background' style={{height: "inherit"}}>
      {/* Header y Cortinas */}
      <div className='position-relative museum-background' style={{height: "inherit"}}>
        <img src={cortinas} alt="cortinas" className='position-absolute' style={{width: "100%"}}/>
        <h2 className='position-absolute subtitle-font' style={{marginTop: "15%", marginLeft: "16%", fontSize: "10vw", lineHeight: "1"}}>Colección</h2>        
      </div>
      { /* Ir a Colección */}
      <div className="position-relative">
        <div className='position-absolute'></div>
        <div className='position-absolute'></div>
        <div className='position-absolute'></div>
      </div>
    </main>
  )
}

Collection.styles = `
.collection-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.collection-title {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  font-size: 3.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 10;
}

.collection-links-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  backdrop-filter: blur(10px);
  z-index: 10;
}

.collection-link-item {
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.collection-link-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.collection-image-container {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.collection-image {
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.collection-image:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .collection-container {
    padding: 1rem;
  }
  
  .collection-link-item {
    padding: 1rem;
  }
  
  .collection-image {
    max-width: 150px;
  }
  
  .collection-title {
    font-size: 2.5rem;
  }
}
`;

export default Collection
