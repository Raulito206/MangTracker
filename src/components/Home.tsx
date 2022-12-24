import { FC } from "react"
import { Navbar } from "./Navbar"


/**
 * Returns JSX for home page
 * @returns JSX.Element
 */
export const Home:FC = ():JSX.Element => {
    return (
        <Navbar SelectedTab={0}></Navbar>
    )
}
