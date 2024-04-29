import {Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="App-demos">
          <section className="App-demos-title">
            Demos:
          </section>
          <Link
              to="/tabselector"
              className="App-demos-link"
          >
            TabSelector
          </Link>
          <Link
              to="/inputlist"
              className="App-demos-link"
          >
            InputList
          </Link>
          <Link
              to="/ticktimer"
              className="App-demos-link"
          >
            TickTimer
          </Link>
        </section>
      </header>
    </div>
  );
}

export default App;
