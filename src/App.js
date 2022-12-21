import logo from "./logo.svg";
import "./App.css";
import "./Firebase.js";
import { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { auth, provider } from './Firebase';
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

function App() {
  const [user, setUser] = useState({});

  const Navigation = () => {
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      console.log("USER: " + JSON.stringify(user));
      return <Login setUser={setUser}/>;
    }
    else {
      console.log("USER: " + JSON.stringify(user));
      return <h1>Logged in</h1>;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1>
          {JSON.stringify(user)}
        </h1>
        <Navigation />
      </header>
    </div>
  );
}

export default App;