import React, { useState } from 'react';

import H1 from './Components/titles/H1';
import H2 from './Components/subtitles/H2';
import H3 from './Components/subtitles/H3';
import Ul from './Components/listas/Ul'
import Header from './Components/pages/Header';
import Post from './Components/pages/Post';

const titulo = {
    descricao: 'Lista de Tarefas',
};

const listTarefas = [
    {
        id: 1, 
        descricao: 'Cozinhar'
    },
    {
        id: 2,
        descricao: 'Limpar casa'
    },
    {
        id: 3,
        descricao: 'Estudar'
    }
];

/**
 * 
 * PROPS => basicamente servem para passar valores de um componente pai para um componente filho
 *      => São apenas leitura no componente filho, ou seja, se um componente filho tentar sobrescrever alguma props passada do pai ocasionará um erro
 */
function App() {

    const [ listPosts, setPosts ] = useState([
        {
            id: 1,
            titulo: "Título Post 1",
            subtitulo: "Subtítulo Post 1",
            likes: 20
        },
        {
            id: 2,
            titulo: "Título Post 2",
            subtitulo: "Subtítulo Post 2",
            likes: 22
        },
        {
            id: 3,
            titulo: "Título Post 3",
            subtitulo: "Subtítulo Post 3",
            likes: 11
        },
        {
            id: 4,
            titulo: "Título Post 4",
            subtitulo: "",
            likes: 0
        },
    ]);

    //console.log({ listPosts });

    function handleRefresh() {
        setTimeout( () => {
            setPosts( (prevState) => 
                [ 
                    ...prevState,
                    {
                        id: (prevState.length + 1),
                        titulo: `Título Post ${ (prevState.length + 1) }`,
                        subtitulo: `Sub # ${ (prevState.length + 1) }`,
                        likes: ( (prevState.length + 1) * 3 )
                    }
                ] 
            );
        }, 2000);
    }

    return (
        <>
            {/* <H1 obj={ titulo } />
            <H2/>
            <H3/>
            <Ul options={ listTarefas } style={ { listStyle: 'none' } } />
            <hr /> */}
            <Header title="Título Header Posts">
                <H2 titulo="Subtítulo children componentizado dentro de Header"/>
                <small>html Children dentro de Header</small>
                <button onClick={ handleRefresh }> Atualizar Posts </button>
            </Header>
            <hr />
            { 
                listPosts.map( ( post ) => <Post key={ post.id } 
                                                post={ post }
                                                likes={ post.likes }
                                            />
                )
            }
        </>
    );
}

export default App;