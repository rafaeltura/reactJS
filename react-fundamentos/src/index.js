import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

// ReactDOM.render(
//     //primeiro elemento ou é uma tag html ou um componente react, ou seja, inicia-se a utilização de JSX
//     <h1>Olá REACTJS!!!</h1>,
//     //segundo argumento é o 'container', ou seja, onde será renderizado
//     document.querySelector('#root')
// )

/**
 * Criando um elemento via react, utilizando o conceito Funcional Component
 */

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)