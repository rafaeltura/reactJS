import React from 'react';
import PropTypes from 'prop-types';

function H1 ( props ) {
    const { descricao, name } = props.obj;
    return <h1> { descricao } </h1>;
}

H1.propTypes = {
    obj: PropTypes.shape({
        descricao: PropTypes.string,
        name: PropTypes.string
    })
}
H1.defaultProps = {
    obj: {
        descricao: 'Descrição Default',
        name: 'Name Default'
    }
}

export default H1;