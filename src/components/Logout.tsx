import { signOut } from 'firebase/auth'
import { FC } from 'react';
import { auth } from '../Firebase'

export const Logout:FC = ():JSX.Element => {
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