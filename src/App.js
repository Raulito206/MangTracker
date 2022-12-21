import logo from "./logo.svg";
import "./App.css";
import "./Firebase.js";
import { useState, useEffect } from 'react'
import { Login } from './components/Login'
import { auth, provider } from './Firebase'
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

function App() {
  const [user, setUser] = useState({})

  // useEffect(() => {
  //   async function redirectResult() {
  //     const result = await getRedirectResult(auth);
  //     //This gives you a Google Access Token. You can use it to access Google APIs
  //     try {
  //       console.log("RESULT: " + result)
  //       if (result) {
  //           // This is the signed-in user
  //           const user = result.user;
  //           // This gives you a Google Access Token.
  //           const credential = GoogleAuthProvider.credentialFromResult(result);
  //           const token = credential.accessToken;
  //           setUser(user)
  //           console.log("USER: " + JSON.stringify(user) + "\nTOKEN: " + token)
  //       }
  //    } catch (error) {
  //     console.error(error)
  //    }
  //   }
  //   redirectResult()
  // }, [])

  const Navigation = () => {
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      console.log("USER: " + JSON.stringify(user))
      return <Login setUser={{setUser}}/>
    }
    else {
      console.log("USER: " + JSON.stringify(user))
      return <h1>Logged in</h1>
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