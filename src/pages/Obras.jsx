import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import CardTiteres from '../Components/CardTiteres'
import imgPrincipal from "../assets/gallery/1.jpg"
import actor from "../assets/dragondienteflojo-img1.jpg"
export const Obras = () => {
  return (
    <div className='contenedor-principal'>

        <Sidebar/>
        {/* Section Imagen con Titulo y Descripcion - Obra */}
        <div className='obra-contenedor '>
            <div className='img '>
                <img src= {imgPrincipal} alt="" />
            </div>
            <div className='titulo'>Titutu</div>
            <div className='descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laborum!</div>
        </div>

        {/* Section Títeres y Autores */}
        <CardTiteres name = "Pedrito Perez" descripcion ="Mucho Texto para agregar" img ={actor}/>
        <CardTiteres name = "Pedrito Perez" descripcion ="Mucho Texto para agregar" img ={actor}/>
        <CardTiteres name = "Pedrito Perez" descripcion ="Mucho Texto para agregar" img ={actor}/>
        <CardTiteres name = "Pedrito Perez" descripcion ="Mucho Texto para agregar" img ={actor}/>
        
        
    </div>
  )
}
