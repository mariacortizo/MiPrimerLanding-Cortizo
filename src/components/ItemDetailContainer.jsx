
import React, { useEffect, useState} from 'react'
import {  getProductById } from '../asyncmock'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [prod, setProd] =useState({})
  const [cargando, setCargando] = useState(true)
  //const { id} = useParams ()
 const[id,setId] = useState (1) 

 useEffect(() =>{
  setCargando(true)
  
  getProductById(id)
  .then(res =>{ setProd(res)
  setCargando (false)
 })

 }, [id]

 )
 
 const mostrarSiguiente =()  =>{
 setId(id +1)
 }
 const mostrarAnterior =()  =>{
  setId(id -1)
  }

  console.log(id)
  if(cargando){
    return(<h5>Cargando....</h5>)
  }
  return (
    <div className='card'>
      <h3>
        {prod.nombre}
        </h3>
       <img className='foto' src={prod.imagen} alt=""/>

      <p>{prod.precio}</p>
      <p> {prod.categoria}</p>
  <div className='anterior'>
  <button className="btn" onClick={mostrarAnterior}> ver anterior</button>
  <button className='btn' onClick={mostrarSiguiente}> ver siguiente</button>
  </div>
    </div>
  )
}

export default ItemDetailContainer