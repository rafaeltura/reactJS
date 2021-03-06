import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// ReactDOM.render(
//     //primeiro elemento ou é uma tag html ou um componente react, ou seja, inicia-se a utilização de JSX
//     <h1>Olá REACTJS!!!</h1>,
//     //segundo argumento é o 'container', ou seja, onde será renderizado
//     document.querySelector('#root')
// )

/**
 * Criando um elemento via react, utilizando o conceito Funcional Component
 */
/**
 * Render => Renderizar, basicamente, pegar o código e converter em algo que o usuário irá visualizar
 */
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)