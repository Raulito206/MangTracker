import { FC } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Logout } from './Logout'


export const Navbar:FC = ():JSX.Element => {
    const { user } = useAuth()
    if (!user) {
        console.log('not logged in');
        return <Navigate to={'/login'}></Navigate>
    } else {
        return (
            <ul style={{listStyle:"none"}}>
                <li><Link style={{textDecoration:"none"}} to={'/'}>Home</Link></li>
                <li><Link style={{textDecoration:"none"}} to={'/'}>Current user: {user.email }</Link></li>
                <li><Logout /></li>
            </ul>
        )
    }
}