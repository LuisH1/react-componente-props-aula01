import React from 'react';

export default function Carta(props) {
    return (
        <div>
             <h1>
          Olá bom dia
        </h1>
        <p>Nome;{props.nome} </p>
         <p>Destinatario;{props.detinatario}</p>
            <p>
                Estou escrevendo essa carta para a professora Claudiany,
                para avisar que quando estiver empregado, pagarei um almoço e um pastel para ela.
            </p>
        </div>
    )
}