import React from 'react'


export default function ComParamentro (props){
    const status = props.nota >= 7 ? ' Aprovado ' : ' Reprovado '
    return (
        <div>
            <h2>{props.aluno}</h2>
            <p>
                <strong> { props.aluno } </strong> tirou 
                 { props.nota } e esta {status}
            </p>
        
        </div>
    )
}