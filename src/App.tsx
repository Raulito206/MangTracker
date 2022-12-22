import "./App.css";
import "./Firebase";
import { Login } from './components/Login';
import { Home } from './components/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { useEffect, useState } from "react";
import { Watch } from 'react-loader-spinner'

function App() {

  const [isLoading,setIsLoading] = useState(true)

  // Loads when mounted
  useEffect(() => {

    // Loading affect for async await
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);

  }, [])
  
  return (
    <div className="App">
      {
        isLoading
        ?
        <Watch color="white"/>
        :
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes> 
          </AuthProvider>
        </BrowserRouter>
      }
    </div>
  );
}
export default App;