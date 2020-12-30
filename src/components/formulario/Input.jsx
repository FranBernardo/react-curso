import React, { useState } from 'react'
import './input.css'


export default props =>{
    
    const [valor, setValor]= useState('inicial')
    
    function mudar(e) {
        setValor(e.target.value)
        console.log(e)
    }
    return(
        <div className="Input">
            <h2>{valor}</h2>
           <input  value={valor} onChange={mudar}/>
        </div>
    )
}