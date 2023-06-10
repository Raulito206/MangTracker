import { Navbar } from "./Navbar"
import { FC, useState, useEffect } from 'react'
import { Fab, FormControl, TextField, Autocomplete, Button } from "@mui/material"
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
    const [selectedMangaName, setSelectedMangaName] = useState<string>(null);

    useEffect(() => {
        (async () => {
            try {
                const importedFunction = functions.httpsCallable(functionsFromApp, "listOfSeries");
                const importedFunctionData = (await importedFunction()).data;
                if (importedFunctionData) {
                    const fetchedMangaNames: string[] = importedFunctionData as string[];
                    setMangaNames(fetchedMangaNames);
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, []) 

    const addBookmark = async () => {
         try {
            const importedFunction = functions.httpsCallable(functionsFromApp, "addBookmark");
            await importedFunction({mangaName: selectedMangaName});
        } catch (err) {
            console.error(err);
        }
    }

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
                    multiple={false}
                    options={mangaNames}
                    renderInput={(params) => <TextField {...params} label="Series"/>}
                    onChange={(_, text: string) => setSelectedMangaName(text)}
                    value={selectedMangaName}
                />
            </FormControl>
            <Button
                variant="contained"
                onClick={addBookmark}
            >
                Bookmark
            </Button>
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
