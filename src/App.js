import {Link} from 'react-router-dom';

import logo from './logo.svg';
import {demos_link} from './constants';
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
                <div className="App-demos">
                    <span className="App-demos-title">Demos:</span>
                    {
                        demos_link && demos_link.length ? demos_link.map(link => (
                            <Link key={link.id} className='App-demos-link' to={link.value}>{link.label}</Link>
                        )) : <></>
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
