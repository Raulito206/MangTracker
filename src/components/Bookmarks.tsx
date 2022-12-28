import { Navbar } from "./Navbar"
import { FC, useEffect, useState, KeyboardEvent } from 'react'
import { Fab, FormControl, Select, MenuItem, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { BooleanLiteral, Map } from "typescript"

interface AddStateProp {
    addState: boolean;
}

interface AddSelectedProp {
    addSelectedState: boolean;
}

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

const AddMangaURL:FC<AddSelectedProp> = ({addSelectedState}):JSX.Element => {
    
    const [inputURLS, setInputURLS] = useState([]);
    const [currentValue, setCurrentValue] = useState('');

    const styles_mangaurl = () => {
        return {
            backgroundColor:"white", 
            display:"none",
            marginTop:"30px",
            borderRadius:"10px",
            borderColor:"none"
        }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            setInputURLS([...inputURLS, currentValue]);
            setCurrentValue('');
            console.log(currentValue);
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
const AddMangaDropdown:FC<AddStateProp> = ({addState}):JSX.Element => {

    const [mangaSource, setMangaSource] = useState<string>('');
    
    const availableSources:string[] = ['Asura Scans', 'Reaper Scans', 'Flame Scans'];

    const styles_mangaDropdown = () => {
        return {
            backgroundColor:"white", 
            display:"none",
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

    useEffect(() => {
        if (addState === false) {
            document.getElementById("add-manga-form").style.display = "none"
            document.getElementById("add-url-form").style.display = "none"
        } else {
            document.getElementById("add-manga-form").style.display = "flex"
            document.getElementById("add-url-form").style.display = "flex"
        }
    }, [addState])
    
    return (
        <div className="bookmarks">
            <Navbar SelectedTab={1}/>
            <AddMangaDropdown addState={addState} />
            <div className="addButton">
                <Fab color="primary" aria-label="add" align-self="right" onClick={() => {
                        setAddState(!addState);
                    }}>
                    {addState === false && <AddIcon />}
                    {addState === true && <RemoveIcon />}
                </Fab>
            </div>
            <AddMangaURL addSelectedState = { true } />
        </div>
    )
}