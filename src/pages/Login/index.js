import React, { useState } from 'react'
import api from '../../services/api'


export default function Login({ history }) {
  // o useState serve para criar variaveis de estado dentro do React
  // por padrao temos 2 variaveis, a primeira é a variável em sí e a segunda é uma função para alterar o valor da variavel
  const [ email, setEmail ] = useState('')
  
  async function handleSubmit(event) {
    event.preventDefault() 

    const response = await api.post('/sessions', { email })

    const { _id } = response.data

    localStorage.setItem('user', _id)

    history.push('/dashboard')
  }

  return (
    <>
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
    </>
  )
}