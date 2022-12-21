import { auth, provider } from '../Firebase'
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import GoogleButton from 'react-google-button';
import React from 'react'


export const Login = ({setUser}) => {

    async function login_process() {
        try {
            await signInWithRedirect(auth, provider);
            const result = await getRedirectResult(auth);
            // const user = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("NEW USER: " + JSON.stringify(user))
        } catch (error) {
            //We can handle errors here, not sure what we want to implement.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log('ERROR: ' + errorMessage)
        }
    }
    return <GoogleButton type="dark" onClick={login_process} />
}