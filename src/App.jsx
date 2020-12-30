import React from 'react'
import Primeiro from './components/basicos/Primeiro';

import ComParamentro from './components/basicos/ComParanmentro'

import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

import Card from './components/layout/card'
import './App.css'
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProduto'

export default () => (

    <div className="App">
        <h1>Numeros da Mega da Virada</h1>


        <div className="Cards">
        
        <Card titulo="Desafio repetição" color="#EE82EE">
        <TabelaProdutos></TabelaProdutos>
            </Card>

        <Card titulo="Repetição" color="#EE82EE">
        <ListaAlunos></ListaAlunos>
            </Card>


        <Card titulo="Componente familia" color="#8B008B">
                <Familia></Familia>
                
            </Card>
            <Card titulo="Desafio conteudo" color="#8A2BE2	">
                <Aleatorio min={1} max={60} />

            </Card>


            <Card titulo="Fragmento" color="#9370DB">
                <Fragmento />
            </Card>

            <Card titulo="Com Paramentro" color="#4B0082">
                <ComParamentro
                    aluno="fran"
                    nota={9.5}
                />
            </Card>

            <Card titulo="Primeiro" color="#9400D3">
                <Primeiro />
            </Card>

            


        </div>
    </div>


);