import React from "react";
import H2 from "../subtitles/H2";

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