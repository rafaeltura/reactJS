import React from "react";
import H2 from "../subtitles/H2";
import PropTypes from "prop-types";

export default function Post (props) {
    
    const { titulo, subtitulo } = props.post;
    
    return (
        <>
            <article>
                <H2 titulo={ titulo }/>
                <small> { subtitulo } </small>
            </article>
            <br />
        </>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        subtitulo: PropTypes.string
    }).isRequired ,
}