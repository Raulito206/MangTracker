import { useAuth } from '../contexts/AuthContext'
import { auth, googleProvider, githubProvider, facebookProvider } from '../Firebase'
import { AuthProvider, signInWithPopup, fetchSignInMethodsForEmail } from 'firebase/auth'; 
import { createUserDocument } from '../Firebase'
import { Navigate } from 'react-router-dom'
import { FC, useState } from 'react';
import { ButtonGroup } from '@mui/material';
import { LoadingButton } from '@mui/lab'
const googleLogo = require('../assets/google-logo.png')
const githubLogo = require('../assets/github-logo.png')
const facebookLogo = require('../assets/facebook-logo-two.png')

/**
 * Returns appropriate JSX for login page
 * @example
 * Navigates to home if logged in
 * Else, renders a login button for signup that includes handleLogin()
 * @returns JSX.Element
 */
export const Login:FC = ():JSX.Element => {

    const [isLoading, setIsLoading] = useState(false);


    // Context containing user object retrieved from auth
    const { user } = useAuth();

    // Run when login button is clicked
    async function handleLogin(provider:AuthProvider) {
        setIsLoading(true);
        const buttons = document.getElementsByClassName("signin-logo");
        for (let i = 0; i < buttons.length; i++) {
            buttons.item(i).setAttribute("style", "visibility:hidden")
        }
        
        try {
            // Firebase signInWithPopup auth flow,
            const { user } = await signInWithPopup(auth, provider);

            console.log("NICE")
            // Upsert user into database
            // document = UID of user
            await createUserDocument(user);
            
        } catch (error) {
            
            if (error.code === "auth/account-exists-with-different-credential") {
                try {
                    const signInMethods = await fetchSignInMethodsForEmail(auth, error.customData.email);
                    alert('Please sign in with any of these options: ' + signInMethods)
                } catch(error) {
                    console.error(error);
                }
            }
            console.error(error);
        }
        setIsLoading(false);
        for (let i = 0; i < buttons.length; i++) {
            buttons.item(i).setAttribute("style", "visibility:show")
        }
    }

    // If user exists (logged in), navigate to home page
    if (user) {
        return <Navigate to={'/home'}></Navigate>
    }
    
    // If user is not logged in, return a login button
    // return <GoogleButton type="dark" onClick={handleLogin} />
    return (
        <div className={'login-wrapper'}>
            <div className={'login'}>
                <div className={'mangtracker'}>Mangtracker</div>
                <h2 style={{color:"white", fontSize:"2vmax"}}>Sign-in options</h2>
                
                    <ButtonGroup className="signin-btn-group" aria-label="contained primary button group">
                        <LoadingButton 
                            variant="contained" 
                            color="primary" 
                            loading={isLoading} 
                            onClick={() => handleLogin(googleProvider)}>
                                <img className="signin-logo" src={googleLogo} alt="Google Logo"/>
                        </LoadingButton>
                        <LoadingButton
                         variant="contained" 
                         color="primary" 
                         loading={isLoading} 
                         onClick={() => handleLogin(githubProvider)}>
                            <img className="signin-logo" src={githubLogo} alt="GitHub Logo"/>
                        </LoadingButton>
                        <LoadingButton
                         variant="contained" 
                         color="primary" 
                         loading={isLoading} 
                         onClick={() => handleLogin(facebookProvider)}>
                            <img className="signin-logo" src={facebookLogo} alt="Facebook Logo"/>
                        </LoadingButton>
                    </ButtonGroup>
            </div>
        </div>
    );
}