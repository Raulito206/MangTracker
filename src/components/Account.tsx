import { Navbar } from "./Navbar"
import { FC } from "react"

/**
 * Returns Account page as JSX 
 * @returns JSX.Element
 */
export const Account:FC = ():JSX.Element => {
    return (
        <Navbar SelectedTab={2}/>
    )
}