import React from 'react';


export default props =>
{
    const min= props.min;
    const max = props.max;
    const aleatorio =parseInt(Math.random()* (max - min)) + min;
    return(
        <div>
        <h2>Valor Aleatorio</h2>
        <p><strong>Valor mínimo:</strong> {min} </p>
        <p><strong>Valor máximo:</strong> {max} </p>
        <p><strong>Valor Escolhido:</strong> {aleatorio} </p>
    </div>
    );
};

    

//export default function Aleatorio(min,max){
    //return Math.floor(Math.random() * (10 - 1)) + 1;
    //} poderia fazer assim tbm