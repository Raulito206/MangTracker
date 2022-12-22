import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const[user, setUser] = useState({});

    async function signout_process() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    const globalValue = {
        user,
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
