import React from 'react';
import PropTypes from 'prop-types';

function H2 (props) {

    return <h2>{ props.titulo }</h2>;
}

H2.propTypes = {
    titulo: PropTypes.string
}

H2.defaultProps = {
    titulo: 'Título H2 default'
}
export default H2;