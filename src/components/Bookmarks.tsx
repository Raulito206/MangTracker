import { Navbar } from "./Navbar"
import { FC, useState, KeyboardEvent } from 'react'
import { Fab, FormControl, Select, MenuItem, TextField } from "@mui/material"
import * as functions from 'firebase/functions'
import { functionsFromApp } from "../Firebase"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'



interface AddMangaDropdownProp { mangaSource: string, setMangaSource: Function };

interface AddMangaURLProp { mangaSource: string };

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

const AddMangaURL:FC<AddMangaURLProp> = ({mangaSource}):JSX.Element => {
    
    const [currentValue, setCurrentValue] = useState('');

    const styles_mangaurl = () => {
        return {
            backgroundColor:"white", 
            marginTop:"30px",
            borderRadius:"10px",
            borderColor:"none"
        }
    }

    const handleKeyPress = async (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(currentValue);
            const reqString = "importFrom" + mangaSource.replace(" ", "");
            try {
                const importedFunction = functions.httpsCallable(functionsFromApp, reqString);
                const result = await importedFunction(currentValue);
                console.log(JSON.stringify(result));

            } catch(error) {
                console.error(error);
            }
        }
    }
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <FormControl id = 'add-url-form' fullWidth={true} sx={styles_mangaurl}>
            <TextField
                id="manga-url-input"
                label="Enter a Manga URL"
                variant="outlined"
                onChange={event => setCurrentValue(event.target.value)}
                onKeyPress={handleKeyPress}
             />
            </FormControl>
        </div>
    )
}

/**
 * Returns supported scanlation groups in the form of a dropdown as JSX 
 * @returns JSX.Element
 */
const AddMangaDropdown:FC<AddMangaDropdownProp> = ({mangaSource, setMangaSource}):JSX.Element => {

    const availableSources:string[] = ['Asura Scans', 'Reaper Scans', 'Flame Scans'];

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
                <Select 
                    id="manga-dropdown-select"
                    sx={{ justifyContent:"center", alignItems:"center" }}
                    size="small"
                    displayEmpty={true}
                    value={mangaSource}
                    onChange={(event) => { setMangaSource(event.target.value) }}
                    label="manga source"
                    variant="filled"
                    renderValue={(value) => {
                        return (<div style={{paddingBottom:"12px"}}> { value.length === 0 ? "Select a source" : value } </div>)
                    }}
                    >
                    <MenuItem disabled value="">
                        <em>Currently supported scanlation groups</em>
                    </MenuItem>
                    {
                        availableSources.map((source) => { return <MenuItem key={source} value={source}>{source}</MenuItem> })
                    }
                </Select>
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
    const [mangaSource, setMangaSource] = useState<string>('');

    return (
        <div className="bookmarks">
            <Navbar SelectedTab={1}/>
            {addState === true && <AddMangaDropdown mangaSource={mangaSource} setMangaSource={setMangaSource} />}
            <div className="addButton">
                <Fab color="primary" aria-label="add" align-self="right" onClick={() => {
                        setAddState(!addState);
                    }}>
                    {addState === false && <AddIcon />}
                    {addState === true && <RemoveIcon />}
                </Fab>
            </div>
            {addState === true && <AddMangaURL mangaSource={mangaSource} />}
        </div>
    )
}