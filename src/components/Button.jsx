import React from 'react'
import './Button.css'
 const Button = ({texto, color, funcion}) => {

 
    
    return (
        <button className={color}  onClick={funcion}> {texto}</button>

    )

}


export default Button