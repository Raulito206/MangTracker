import { FC, SyntheticEvent, useState } from "react";
import { handleSignout } from "./Logout"
import { Tabs, Tab, Box } from "@mui/material"
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';

interface SelectedTabType {
    SelectedTab: number;
}

/**
 * Returns navbar as JSX 
 * @example
 * Clicking any of the tabs will redirect to their respective labels
 * @returns JSX.Element
 */
export const Navbar:FC<SelectedTabType> = ({SelectedTab}):JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(SelectedTab);

    const handleChange = (event:SyntheticEvent, value:number) => {
        setSelectedTab(value);
    }
    
    return (
        <div className="navbar-wrapper">
            <Box className="navbar-box">
                <Tabs variant="scrollable" className="navbar" value={selectedTab} onChange={handleChange}>
                    <Tab 
                        icon={<HomeIcon/>} 
                        className="navbar-btn-home" 
                        href="/home"
                    />
                    <Tab 
                        icon={<BookmarksIcon/>} 
                        className="navbar-btn-bookmarks" 
                        href="/bookmarks"
                    />
                    <Tab 
                        icon={<Person2Icon/>} 
                        className="navbar-btn-account" 
                        href="/account"
                    />
                    <Tab 
                        icon={<LogoutIcon/>}   
                        className="navbar-btn-logout" 
                        onClick={handleSignout}
                    />
                </Tabs>
            </Box>
        </div>
    )
}