import "./App.css";
import "./Firebase";
import { Login } from './components/Login';
import { Home } from './components/Home'
import { Route, Routes, BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Watch } from 'react-loader-spinner'
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Bookmarks } from "./components/Bookmarks";
import { Account } from "./components/Account";
import { useAuth } from "./contexts/AuthContext";

function App() {

  const [isLoading,setIsLoading] = useState(true)

  // Loads when mounted
  useEffect(() => {

    // Loading affect for async await
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 650);

  }, [])

  // MaterialUI theme for later development
  const theme = createTheme({
    palette: {
    },
  })

  // Used to check for user auth
  const context = useAuth();
  
  // Used to access appropriate Route component after auth
  const outlet = () => <Outlet />;

  return (
    <div className="App">
      {
        isLoading
        ?
        <div className="loading-spin-container">
          <Watch wrapperClass="loading-spin-watch" color="white"/>
        </div>
        :
        <BrowserRouter>
            <ThemeProvider theme={theme}>
              <Routes>
                <Route path="/login" element={<Login/>}/>
                {
                  context.user != null
                    &&
                  (
                    <Route element={outlet()}>
                      <Route path='/home' element={<Home/>}/>
                      <Route path='/account' element={<Account/>}/>
                      <Route path='/bookmarks' element={<Bookmarks/>}/>
                      <Route path='/*' element={<Navigate to='/home'/>}/>
                    </Route>
                  )
                }
                {
                  context.user == null && <Route path='/*' element={<Navigate to='/login'/>}/>
                }
              </Routes> 
            </ThemeProvider>
        </BrowserRouter>
      }
    </div>
  );
}
export default App;