import React from 'react';

function H1 ( props ) {
    const { descricao, name } = props.obj;
    return <h1> { descricao } </h1>;
}

export default H1;