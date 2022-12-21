import { auth, provider } from '../Firebase'
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import GoogleButton from 'react-google-button';
import React from 'react'


export const Login = ({setUser}) => {

    async function login_process() {
        try {
            const user = await signInWithPopup(auth, provider);
            setUser(auth.currentUser)
        } catch (error) {
            console.log(error);
        }
    }
    return <GoogleButton type="dark" onClick={login_process} />
}