

import logo from './logo.svg';
import './App.css';
import Russi from './Russi'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      < Russi />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Russi />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;

