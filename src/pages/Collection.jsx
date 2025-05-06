import React from 'react'

//Assets
import cortinas from '../assets/decoraciones/curtains.png'

const Collection = () => {
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

export default Collection
