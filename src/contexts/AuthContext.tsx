import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'
import { onAuthStateChanged, User as UserInterface } from 'firebase/auth'
import { FC } from 'react';

// Return type for AuthContext (set containing user...)
interface AuthContextInterface {
    user: UserInterface;
}

// Creates context that gives access to user
const AuthContext = React.createContext<AuthContextInterface>(null);

/* Returns a wrapper that contains the user object when called */
export const useAuth = ():AuthContextInterface => {
    return useContext(AuthContext);
}

/**
 * Gives context to all its children
 * @example
 * <AuthProvider> <Routes> </Routes> </AuthProvider> gives context to all routes
 * @returns JSX.Element 
 */
export const AuthProvider:FC<any> = ({ children }: any):JSX.Element => {

    const[user, setUser] = useState<UserInterface>(null);

    const globalValue = {
        user,
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={globalValue}>
            {children}
        </AuthContext.Provider>
    )
}
