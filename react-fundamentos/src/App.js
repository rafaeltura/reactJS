import React from 'react';

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

const listPosts = [
    {
        id: 1,
        titulo: "Título Post 1",
        subtitulo: "Subtítulo Post 1"
    },
    {
        id: 2,
        titulo: "Título Post 2",
        subtitulo: "Subtítulo Post 2"
    },
    {
        id: 3,
        titulo: "Título Post 3",
        subtitulo: "Subtítulo Post 3"
    },
    {
        id: 4,
        titulo: "Título Post 4",
        subtitulo: ""
    },
];
/**
 * 
 * PROPS => basicamente servem para passar valores de um componente pai para um componente filho
 *      => São apenas leitura no componente filho, ou seja, se um componente filho tentar sobrescrever alguma props passada do pai ocasionará um erro
 */
function App() {
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
            </Header>
            <hr />
            { 
                listPosts.map( ( post ) => <Post key={ post.id } 
                                                post={ post }
                                            />
                )
            }
        </>
    );
}

export default App;