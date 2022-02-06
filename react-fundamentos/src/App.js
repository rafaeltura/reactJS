import React from 'react';

import H1 from './Components/titles/H1';
import H2 from './Components/subtitles/H2';
import H3 from './Components/subtitles/H3';
import Ul from './Components/listas/Ul'

const titulo = {
    descricao: 'Lista de Tarefas',
}

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
]

function App() {
    return (
        <>
            <H1 obj={ titulo } />
            <H2/>
            <H3/>
            <Ul options={ listTarefas } style={ { listStyle: 'none' } } />
        </>
    );
}

export default App;