import React from 'react'
import produtos from '../../Data/produtos'
import Produtos from '../../Data/produtos'
import './repeticao.css'

export default (props) => {

    function getLInhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className= {i % 2 == 0 ?'par' : '' }>
                    
                        <td>{produto.id}</td>
                        <td>{produto.produto}</td>
                        <td> R${produto.preço}</td>
                    
                </tr>
            )
        })
    }
    return (
        <div className="tabelaProduto">
            <h3>Tabela de Preço</h3>
            <table >
                <thead>
                    <tr>
                        <th>Nº</th>
                        <th>Produtos</th>
                        <th>Preços</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                    {getLInhas()}
                </tbody>
            </table>
        </div>
    )
}
