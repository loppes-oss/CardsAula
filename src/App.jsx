import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default (props)=> {
    const msg = 'vida de formiga'
    
     return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#04 Desafio Aleatório">
                    <Aleatorio mim={1} max={50} />
                </Card>
                <Card titulo="#03 Fragmento">
                    <Fragmento />
                </Card>
                <Card titulo="#02 Comparametro">
                    <ComParametro titulo="situação do aluno" aluno="leonardo" nota={9.3}></ComParametro>
                    {msg}
                </Card>
                <Card titulo="#01 Primeiro componente">
                    <Primeiro></Primeiro> 
                </Card>

            </div>

        </div>


     )
}