import "./App.css";
import "./Firebase.js";
import { Login } from './components/Login';
import { Navbar } from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<Navbar/>}/>
        </Routes> 
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;