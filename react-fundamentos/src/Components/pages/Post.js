import React from "react";
import H2 from "../subtitles/H2";
import PropTypes from "prop-types";

export default function Post (props) {
    
    const { id, titulo, subtitulo } = props.post;
    
    return (
        <>
            <article>
                <H2 titulo={ titulo }/>
                <small> { subtitulo } </small>
                <button onClick={ () => { props.onRemove( id ) } }> Remover </button>
            </article>
            <br />
        </>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        subtitulo: PropTypes.string
    }).isRequired ,
}