import { Navbar } from "./Navbar"
import { FC } from "react"
import "../App.css";

/**
 * Returns Account page as JSX 
 * @returns JSX.Element
 */
export const Account:FC = ():JSX.Element => {
    return (
        <div>
        <Navbar SelectedTab={2}/>
        <div className={"accounttext"}>
            <ul className={'accounttextul'}>
                <li>User ID:</li>
                <li>Email:</li>
                <li>Display name:</li>
            </ul>
        </div>
            
        </div>
    )
}