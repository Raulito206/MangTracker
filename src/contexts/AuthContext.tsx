import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'
import { onAuthStateChanged, User as UserInterface } from 'firebase/auth'
import { FC } from 'react';

interface AuthContextInterface {
    user: UserInterface;
}

const AuthContext = React.createContext<AuthContextInterface>(null);

export const useAuth = ():AuthContextInterface => {
    return useContext(AuthContext);
}

export const AuthProvider:FC<any> = ({ children }: any):JSX.Element => {

    const[user, setUser] = useState<UserInterface>(null);

    const globalValue = {
        user,
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
