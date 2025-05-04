import React from 'react'
import Card from '../Components/Card.jsx'
import img from '../assets/ecomuseo-carousel-2.jpg'
const Collection = () => {
  return (
    <div className='container mt-5 mb-5 mx-5 me-5'>
      <h2 className='text-center mb-5'>Colección</h2>
       <Card title="Card title " description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
       <img src={img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
       <Card title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
       <img src={img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
       <Card title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
       <img src={img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
       <Card title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
       <img src={img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
       <Card title="Card title" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
       <img src={img} alt="" className='img-fluid mb-5 w-50 mx-auto'/>
    </div>
  )
}

export default Collection
