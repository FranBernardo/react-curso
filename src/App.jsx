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
import ParOuImpar from './components/condicional/ParOuImpar'
import Usuario from './components/condicional/Usuario'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'



export default () => (

    <div className="App">
        <h1>Numeros da Mega da Virada</h1>

        <Card titulo="Megasenha" color="#EE82EE">
            <Mega></Mega>
            </Card>

        <Card titulo="Contador" color="#EE82EE">
            <Contador numeroInicial={10}></Contador>
            </Card>

        <Card titulo="Comunicação Input" color="#EE82EE">
            <Input></Input>
            </Card>

        <Card titulo="Comunicação INdireta" color="#EE82EE">
            <IndiretaPai></IndiretaPai>
            </Card>


        <Card titulo="Comunicação direta" color="#EE82EE">
            <DiretaPai></DiretaPai>
            </Card>

        <div className="Cards">
        <Card titulo="condicional" color="#DB7093">
        <ParOuImpar numero={20}></ParOuImpar>
        <Usuario usuario={{ nome: 'Fernando' }}></Usuario>
            </Card>
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