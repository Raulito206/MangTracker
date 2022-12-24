import { Navbar } from "./Navbar"
import { FC } from 'react'
import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import "../App.css"

const ListOfMangas:FC = ():JSX.Element => {
    return (
        <div>

        </div>
    )
}

const Manga:FC = ():JSX.Element => {
    return (
        <div>

        </div>
    )
}

/**
 * Returns Bookmark page as JSX 
 * @returns JSX.Element
 */
export const Bookmarks:FC = ():JSX.Element => {
    return (
        <div className="bookmarks">
            <Navbar SelectedTab={1}/>
            <div className="addButton">
                <Fab color="primary" aria-label="add" align-self="right">
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}