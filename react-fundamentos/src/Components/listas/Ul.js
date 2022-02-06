import React from "react";

function Ul (props) {
    
    const options = props?.options || [];
    const style = props?.style || "";
    
    return (
        <ul style={ style }>
            {
                options.map( ( { id, descricao } )=> <li key={ id }>{ `${id} - ${descricao} ` }</li>)
            }
        </ul>
    );
}

export default Ul;