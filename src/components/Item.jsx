import React, { useState } from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import Button from './Button'
import ItemDetailContainer from './ItemDetailContainer'
import { Link } from 'react-router-dom'
export const Item = ({producto}) => {
  console.log('producto',producto);
  const[isVisible, setIsVisible] = useState(false)
  const mostarDetalles =() =>{
    setIsVisible(true)
  }
  return (
    <div className='container'>
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen}alt=""/>
      <p>{producto.precio}</p>
     <p>{producto.categoria}</p>
      <Button color="green" funcion={() =>mostarDetalles (producto.id)}
        texto="Ver Detalles"/>
      <Link to={`/detalle/${producto.id}`}> </Link>
      {isVisible ?  <ItemDetailContainer id={producto.id} /> : <p> Click al Boton</p>}
      
      
    </div>
  )
}

export default Item