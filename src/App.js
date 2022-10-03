import React from 'react'
import './App.css';

// como a logo é uma variável, ela é usada entre chaves
import logo from './assets/logo.svg'

import Routes from './routes'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Airbnb"></img>

      <div className="content">
        <Routes />
        
      </div>
    </div>
  );
}

export default App;
