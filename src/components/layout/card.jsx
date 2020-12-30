import React from 'react';
import "./card.css";

export default (props) =>{
    const estilo ={
        backgroundColor: props.color,
        borderColor: props.color,
    }

    return( 
    <div className="Card">
        <div className="title" style={estilo}>{props.titulo}</div>
        <div className="content">{props.children}</div>
        
    </div>);

};