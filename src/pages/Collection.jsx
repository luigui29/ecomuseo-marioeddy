import React from 'react'
import Card from '../Components/Card.jsx'

//Titeres

import dragonflojo_img from '../assets/dragondienteflojo-img1.jpg'
import avolarpapagayo_img from '../assets/avolarpapagayo-img1.jpg'
import meloencontreprim_img from '../assets/meloencontreprimero-img1.jpg'

const Collection = () => {
  return (
    <main className='museum-background'>
      <div className='container mx-5 me-5'>
        <h2 className='text-center mb-5'>Colección</h2>
        <Card title="Card title " description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        <img src={dragonflojo_img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
        <Card title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        <img src={avolarpapagayo_img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
        <Card title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        <img src={meloencontreprim_img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
      </div>
    </main>
  )
}

export default Collection
