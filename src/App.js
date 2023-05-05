import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

function hello(name, age){
  return (
    <div>
      <h2>Soy {name}</h2>
      <h2>Tengo {age} años</h2>
    </div>
  );
}


function App() {
  const name = 'Mario';
  const age = 12
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {hello(name, age)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting/>
      </header>
    </div>
  );
}

export default App;
