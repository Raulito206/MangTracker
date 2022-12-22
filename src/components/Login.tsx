import GoogleButton from 'react-google-button';
import { useAuth } from '../contexts/AuthContext'
import { auth, provider } from '../Firebase'
import { signInWithPopup } from 'firebase/auth'; 
import { createUserDocumentFromAuth } from '../Firebase'
import { Navigate } from 'react-router-dom'
import { FC } from 'react';


export const Login:FC = ():JSX.Element => {

    // const { login_process } = useAuth()
    const { user } = useAuth();

    async function handleLogin() {
        try {
            const response = await signInWithPopup(auth, provider);
            
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const userDocRef = createUserDocumentFromAuth(user);

    // function SigninButton() {
    //     return (
    //         <button>

    //         </button>
    //     )
    // }

    if (user) {
        return <Navigate to={'/'}></Navigate>
    }
    // return <SigninButton/>
    return <GoogleButton type="dark" onClick={handleLogin} />
}