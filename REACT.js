/**
 * ==== LIBRARY
 */
//Conjunto de funcionalidades focadas em resolver algum tipo específico de problema
    //ex.: Axios (só resolve problemas de client http para requisições), 
         //date-fns (aó resolve problemas de manipulação de datas);

/**
 * ==== FRAMEWORKS
 */
//Conjunto de funcionalidades que resolvem vários tipos de problemas
    //ex.: Angular, Vue.js

/**
 * ==== REACT ====
 */

    //= O QUE É?
        //Library responsável em construir interfaces (UI's);
        //Possui um ecossistema (styledComponents, Routers, ...); 
        //É multiplataforma:
            //ReactDOM => para web;
            //React Native => apps mobile;
            //React Native Windows =>> apps windows;
        
    //= CARACTERÍSTICAS:
        //Basicamente JS puro;
        //Componentes: são estruturas isoladas que não interferem uma na outra, mas que se juntadas constroem algo maior. 
            //ex.: Pneus, vidros, carrocerias e faróis são componentes isolados, mas que juntos formam um carro;
        //Extensão JSX a qual é basicamente uma habilidade de escrever código HTML dentro do JS;
            /*ex.: function App() {
                return <h1> Componente Funcional </h1>;
            }*/
        //Precisa utilizar o Babel para transpilar o código JSX em JS, pois, os navegadores não tem suporte para algumas questões implementadas no React, como por exemplo, o HTML no JS.

    //= COMPONENTS:
        //2 Formas de criá-los:
            /* 1: Componente funcional
                import React from 'react';
                function App() {
                    return <h1> Componente Funcional </h1>;
                }
            */
            /* 2: Componente de Classe
                import React from 'react';
                class App extends React.Component {
                    render() {
                        return <h1> Componente de Classe </h1>;
                    }
                }
            */
    
    //= PQ UTILIZAR REACT?
        //Reutilização de Components, o que gera mais produtividade e velocidade;
        //Facilidade de manutenção e escabilidade
        //LOWA (Learn Once, Write Anywhere)
    
    