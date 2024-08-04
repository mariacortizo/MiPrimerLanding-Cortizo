import React, {useEffect, useState }from 'react'
import Button from '../Button'
import './ItemCount.css'



export const ItemCount = () => {
    const [ count, setCount] = useState(1)

useEffect(() => {
  console.log("se ejecuto useEffect")
 
}, [])
let valor = 1

const restar =() =>{
    console.log("se esta ejecutando restar")
    setCount(count - 1)
    valor --
    
}
console.log("count" ,count)
const sumar =() => {
    console.log("se esta ejecutando sumar")
    setCount(count + 1)
    valor ++
    

}




  return (
    <div className='contador' >
        <Button  color="green" texto=" - " funcion={ restar}/>
        <p>{ count } </p>
        <Button color="green" texto=" + " funcion={sumar} />
    </div>
  )
}
