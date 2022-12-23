import { Navbar } from "./Navbar"
import { FC } from 'react'

/**
 * Returns Bookmark page as JSX 
 * @returns JSX.Element
 */
export const Bookmarks:FC = ():JSX.Element => {
    return (
        <Navbar SelectedTab={1}/>
    )
}