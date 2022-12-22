import { signOut } from 'firebase/auth'
import { FC } from 'react';
import { auth } from '../Firebase'

export const Logout:FC = () => {
    async function signout_process() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={signout_process}>Logout</button>
    )
}