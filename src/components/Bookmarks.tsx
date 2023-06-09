import { Navbar } from "./Navbar"
import { FC, useState, useEffect } from 'react'
import { Fab, FormControl, TextField, Autocomplete } from "@mui/material"
import * as functions from 'firebase/functions'
import { functionsFromApp } from "../Firebase"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'


/**
 * Returns list of supported mangas form of a dropdown as JSX 
 * @returns JSX.Element
 */
const AddMangaDropdown:FC = ():JSX.Element => {

    const [mangaNames, setMangaNames] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const importedFunction = functions.httpsCallable(functionsFromApp, "listOfSeries");
                const importedFunctionData = (await importedFunction()).data;
                if (typeof importedFunctionData === "object" && "mangaNames" in importedFunctionData) {
                    const fetchedMangaNames: string[] = importedFunctionData.mangaNames as string[];
                    setMangaNames(fetchedMangaNames);
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []) 

    const styles_mangaDropdown = () => {
        return {
            backgroundColor:"white", 
            marginTop:"30px",
            borderRadius:"10px"
        }
    }

    return (
        <div className="manga-dropdown" style={{display:"flex", justifyContent:"center"}}>
            <FormControl id="add-manga-form" fullWidth={true} sx={styles_mangaDropdown}>
                <Autocomplete
                    options={mangaNames}
                    renderInput={(params) => <TextField {...params} label="Series"/>}
                />
            </FormControl>
        </div>
    )
}

/**
 * Returns Bookmark page as JSX 
 * @returns JSX.Element
 */
export const Bookmarks:FC = ():JSX.Element => {
    
    const [addState, setAddState] = useState(false);

    return (
        <div className="bookmarks">
            <Navbar SelectedTab={1}/>
            {addState === true && <AddMangaDropdown/>}
            <div className="addButton">
                <Fab color="primary" aria-label="add" align-self="right" onClick={() => {
                        setAddState(!addState);
                    }}>
                    {addState === false && <AddIcon />}
                    {addState === true && <RemoveIcon />}
                </Fab>
            </div>
        </div>
    )
}
