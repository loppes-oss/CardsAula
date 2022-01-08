import React from "react"

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.aluno} sua nota é {props.nota},  
             e está {status}
            </p>
            

        </div>
    )

}