import "./App.css";
import "./Firebase";
import { Login } from './components/Login';
import { Navbar } from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Navbar/>}/>
        </Routes> 
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;