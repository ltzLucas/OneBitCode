import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <h1>React</h1>
      <p>A biblioteca para intefaces de usario web e nativas</p>

      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr />
      <h1>Crie Interfaces de usuário de componentes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium minus quam rem. Eum facere eius vel odit, corrupti impedit.</p>
      <hr />
      <h1>Escreva componentes com código e marcação</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, necessitatibus quisquam incidunt animi fugit laborum excepturi aspernatur quidem ea corporis.</p>
      <hr />

      <h1>Proximos passos</h1>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>

    </>
  )
}

export default App
