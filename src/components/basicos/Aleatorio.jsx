import React from "react";

export default (props) =>{
    const min = props.mim
    const max = props.max
    const valor = parseInt(Math.random () * 
    (max - min)) + min;
    return(
        <div>
          <h2>valor Aleatorio</h2>
          <p>Valor Minino: {min} </p>
          <p>Valor maximo: {max}</p>
          <p>valor escolhido: {valor}</p>
    
          
        </div>
  )
}