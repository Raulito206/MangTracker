import { Navbar } from "./Navbar"
import { FC, useEffect, useState } from "react"
import "../App.css";
import { createUserDocument } from "../Firebase"
import { Login } from "./Login"

/**
 * Returns Account page as JSX 
 * @returns JSX.Element
 */
export const Account:FC = ():JSX.Element => {

    // User info and set user info
    const [userinfo, setUserInfo] = useState([]);

    // Fetch the required data and store in state
    useEffect(() => {
        const fetchData = () => {
            // Generate unique user documentation reference
            const uniqueUserRef = {};
            
            // Fetch user data from firestore using user reference
            
        }
    }

    );
    

    return (
        <div>
        <Navbar SelectedTab={2}/>
        <div className={"accounttext"}>
            <ul className={'accounttextul'}>
                <li>User ID: </li>
                <li>Email: </li>
                <li>Display: </li>
            </ul>
            <ul className={'accounttextul'}>
                <li>{userinfo[0]}</li>
                <li>{userinfo[1]}</li>
                <li>{userinfo[2]}</li>
            </ul>
        </div>
            
        </div>
    )
}