import React from 'react'
import Mapa from './Mapa'

const BigCard = () => {
  return (
    <div className="row h-100">
        <div className="col-md-6">
               <Mapa/>
        </div>
        <div className="col-md-6">
            <h1>Horarios</h1>
            <p>Martes a Domingo: 9am - 5pm</p>
            <p>Lunes: Cerrado</p>

            <p>Dirección: Casa de la Cultura Ateneo, El Roble, Av. Guayana, San Félix, Ciudad Guayana, Edo. Bolívar</p>
        </div>
    </div>
  )
}

export default BigCard