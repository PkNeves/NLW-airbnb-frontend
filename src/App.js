import './App.css';
import api from './services/api'

import logo from './assets/logo.svg'
// como a logo é uma variável, ela é usada entre chaves

function App() {
  function handleSubmit(event) {
    event.preventDefault() 
    console.log('Hello World')
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
          <input type="email" id="email" placehodler="Seu melhor e-mail"/>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
