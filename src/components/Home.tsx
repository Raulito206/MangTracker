import { FC } from "react"
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Logout } from "./Logout"


/**
 * Returns JSX for home page if logged in
 * @example
 * Navigates to login page if not logged in
 * Else, renders the appropriate home page
 * @returns JSX.Element
 */
export const Home:FC = ():JSX.Element => {

    // Context containing user object retrieved from auth
    const { user } = useAuth()
    
    // Bookmarks JSX
    const HomeBookmarks:FC = ():JSX.Element => {
    
        return (
            <div className="HomeBookmarks">
                <ul style={{listStyle:"none"}}>
                <li><Link style={{textDecoration:"none", color:"white"}} to={"/"}>Home</Link></li>
                <li><Link style={{textDecoration:"none", color:"white"}} to={"/"}>Current user: {user.email}</Link></li>
                <li><Logout /></li>
                </ul>
            </div>
        )
    }

    // If user is not logged in, navigate to login page
    if (!user) {
        return <Navigate to={"/login"}></Navigate>
    } else {
        // If user is logged in, render main page
        return (
            <HomeBookmarks/>
        )

    }
}
