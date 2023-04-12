import React, { createContext } from 'react';


  // 4 - Importação de componentes
import FirstComponent from './components/FirstComponent';


  // 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';


// 6 - useState
import State from './components/State';
import Context from './components/Context';


// 9 - type
type textOrNull = string | null
type fixed = "Isso" | "OU" | "Aquilo"


// 10 - context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)



function App() {

  // 1 - variaveis
  const name: string = "Weslley"
  const age: number = 36
  const isWorking: boolean = true


  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${ name }!`
  }

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  // mySecondText = "opa"
  const testandoFixed:fixed = "Aquilo"

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }


  // 3 - está no arquivo First Component.tsx


  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TypeScript</h1>
        <h2>Nome: { name }</h2>
        <p>Idade: { age }</p>
        { isWorking && (
          <p>Está trabalhando</p>
        ) }
        <h3>{ userGreeting(name) }</h3>
        <FirstComponent />
        <SecondComponent name="Segundo"/>
        <Destructuring 
          title='Primeiro Post' 
          content='Algum conteúdo'
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring 
          title='Segundo Post' 
          content='Mais um conteúdo'
          commentsQty={15}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        { myText && 
          <p>Tem texto na variável</p>
        }
        { mySecondText && 
          <p>Tem texto na variável</p>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
