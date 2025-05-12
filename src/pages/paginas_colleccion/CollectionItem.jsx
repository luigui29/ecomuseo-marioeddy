import React from 'react'
import '../../styles/CollectionItem.css'

const CollectionItem = ({ type, data }) => {
  // Verificar si data existe y tiene las propiedades necesarias
  if (!data) {
    return (
      <div className='container collection-item-container w-75'>
        <div className='text-center p-5'>
          <h3>No hay datos disponibles</h3>
        </div>
      </div>
    )
  }

  // Obtener imagen con valor predeterminado
  const imagen = data.imagen || 'https://picsum.photos/600/400?random=1'
  
  // Obtener título con valor predeterminado
  const titulo = data.nombre || data.titulo || 'Sin título'
  
  // Obtener descripción con valor predeterminado
  const descripcion = data.descripcion || 'No hay descripción disponible'

  return (
    <div className='container collection-item-container w-75'>
      <div className='container'>
        <div className='row'>
          <div className="col-8 pe-0 item-image-container">
            <img src={imagen} alt={type} className='item-image'/>
          </div>
          <div className="col-4 item-content">
            <h2 className="item-title">{titulo}</h2>
            <div className="item-description"> 
              {descripcion}
            </div>
          </div>
        </div>
        
        {type === 'autores' && data.obras && Array.isArray(data.obras) && (
          <div className='related-section'>
            <div className="related-header">Obras</div>
            <div className="related-content">
              {data.obras.length > 0 ? (
                data.obras.map((obra, index) => (
                  <div key={`obra-${index}`} className='related-item'>{obra}</div>
                ))
              ) : (
                <div className='related-item'>No hay obras disponibles</div>
              )}
            </div>
          </div>
        )}

        {type === 'obras' && data.autores && Array.isArray(data.autores) && (
          <div className='related-section'>
            <div className="related-header">Autores</div>
            <div className="related-content">
              {data.autores.length > 0 ? (
                data.autores.map((autor, index) => (
                  <div key={`autor-${index}`} className='related-item'>{autor}</div>
                ))
              ) : (
                <div className='related-item'>No hay autores disponibles</div>
              )}
            </div>
          </div>
        )}

        {type === 'titeres' && data.obras && Array.isArray(data.obras) && (
          <div className='related-section'>
            <div className="related-header">Obras</div>
            <div className="related-content">
              {data.obras.length > 0 ? (
                data.obras.map((obra, index) => (
                  <div key={`obra-${index}`} className='related-item'>{obra}</div>
                ))
              ) : (
                <div className='related-item'>No hay obras disponibles</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionItem
