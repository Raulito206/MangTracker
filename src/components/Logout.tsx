import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { Navigate } from 'react-router-dom';

/**
 * Async function that handles signout
 */
 export async function handleSignout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
    <Navigate to="/login"/>
}