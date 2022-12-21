import React, { useContext, useState, useEffect } from 'react'
import { auth, provider } from '../Firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const[user, setUser] = useState({});

    async function login_process() {
        console.log('Attempting to sign in')
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.log(error);
        }
    }

    async function signout_process() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    const globalValue = {
        user,
        login_process,
        signout_process
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log('AUTH STATE CHANGED');
        })
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={globalValue}>
            {children}
        </AuthContext.Provider>
    )
}
