import { Navbar } from "./Navbar"
import { FC } from "react"
import "../App.css";

/**
 * Returns Account page as JSX 
 * @returns JSX.Element
 */
export const Account:FC = ():JSX.Element => {
    var userinfo = [
    'Dummy Username', 
    'Dummy ID', 
    'Dummy Display']

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