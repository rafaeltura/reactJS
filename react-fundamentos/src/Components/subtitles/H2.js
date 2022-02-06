import React from 'react';

function H2 (props) {

    return <h2>{ props.titulo || "Subtítulo Componentizado" }</h2>;
}

export default H2;