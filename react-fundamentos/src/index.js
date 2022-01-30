import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    //primeiro elemento ou é uma tag html ou um componente react, ou seja, inicia-se a utilização de JSX
    <h1>Olá REACT!</h1>,
    //segundo argumento é o 'container', ou seja, onde será renderizado
    document.querySelector('#root')
)