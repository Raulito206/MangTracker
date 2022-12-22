import { signOut } from 'firebase/auth'
import { FC } from 'react';
import { auth } from '../Firebase'

/**
 * Returns JSX button for logout that includes handleSignout()
 * @returns JSX.Element
 */
export const Logout:FC = ():JSX.Element => {
    async function handleSignout() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={handleSignout}>Logout</button>
    )
}