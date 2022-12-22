import "./App.css";
import "./Firebase";
import { Login } from './components/Login';
import { Home } from './components/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner'

function App() {

  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  }, [])
  
  return (
    <div className="App">
      {
        isLoading
        ?
        <MagnifyingGlass color={""} glassColor={"white"} />
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