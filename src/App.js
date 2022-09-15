import React, { useState } from 'react'
import './App.css';
import api from './services/api'

// como a logo é uma variável, ela é usada entre chaves
import logo from './assets/logo.svg'

function App() {
  // o useState serve para criar variaveis de estado dentro do React
  // por padrao temos 2 variaveis, a primeira é a variável em sí e a segunda é uma função para alterar o valor da variavel
  const [ email, setEmail ] = useState('')
  function handleSubmit(event) {
    event.preventDefault() 
    console.log(email)
  }

  return (
    <div className="container">
      <img src={logo} alt="Airbnb"></img>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> pra programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            id="email" 
            type="email" 
            placehodler="Seu melhor e-mail"
            value={email}
            // o js tem por padrão na variavel event da funcao onchange o valor que foi alterado atraves do event.target.value
            onChange={event => setEmail(event.target.value)} 
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
