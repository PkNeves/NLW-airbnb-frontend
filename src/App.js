import './App.css';

import logo from './assets/logo.svg'
// como a logo é uma variável, ela é usada entre chaves

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Airbnb"></img>
    </div>
  );
}

export default App;
