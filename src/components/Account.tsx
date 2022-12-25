import { Navbar } from "./Navbar"
import { FC, useEffect, useState } from "react"
import { useAuth } from '../contexts/AuthContext'
import { User } from "firebase/auth";

/**
 * Returns Account page as JSX 
 * @returns JSX.Element
 */
export const Account:FC = ():JSX.Element => {


    // Context containing user
    const context = useAuth();

    // User info and set user info
    const [userinfo, setUserInfo] = useState<User>(context.user);

    // Fetch the required data and store in state
    useEffect(() => {
        setUserInfo(context.user);
    },[context]);

    return (
        <div>
            <Navbar SelectedTab={2}/>
            <div className={"imageStyle"}>
            <img style={{display: "inline-block", marginTop: "10%", borderRadius: "50%"}} src={userinfo.photoURL} alt="User profile"></img>
            </div>
            <div className={"accounttext"}>
                <ul className={'accounttextul'}>
                    <li>Display: </li>
                    <li>Email: </li>
                </ul>
                <ul className={'accounttextul'}>
                    <li>{userinfo.displayName}</li>
                    <li>{userinfo.email}</li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}