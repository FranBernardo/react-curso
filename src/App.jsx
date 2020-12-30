import React from 'react'
import Primeiro from './components/basicos/Primeiro';
import ComParamentro from './components/basicos/ComParanmentro'

import Fragmento from './components/basicos/Fragmento'
 import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    
        <div id="app"> 
        <h1>fundamentos react 2</h1>
        <Aleatorio />
        <Fragmento />

        <ComParamentro 
        aluno="fran"
        nota={9.5}
        />

        <Primeiro />
       
        
    </div>
    
);