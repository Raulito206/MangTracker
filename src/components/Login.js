import GoogleButton from 'react-google-button';
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { auth, provider } from '../Firebase'
import { signInWithPopup } from 'firebase/auth'; 
import { Navigate } from 'react-router-dom'

export const Login = () => {

    // const { login_process } = useAuth()
    const { user } = useAuth()

    async function handleLogin() {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.log(error);
        }
    }

    function SigninButton() {
        return (
            <button>

            </button>
        )
    }

    if (user) {
        return <Navigate to={'/'}></Navigate>
    }
    // return <SigninButton/>
    return <GoogleButton type="dark" onClick={handleLogin} />
}