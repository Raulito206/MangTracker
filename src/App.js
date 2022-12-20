import logo from "./logo.svg";
import "./App.css";
import "./Firebase.js";
import GoogleButton from 'react-google-button';
import { signInWithGoogle } from "./Firebase";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <GoogleButton type="dark" onClick={signInWithGoogle}>
        
        </GoogleButton>
      </header>
    </div>
  );
}

export default App;
