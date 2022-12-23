import { FC, SyntheticEvent, useState } from "react";
import { handleSignout } from "./Logout"
import { Tabs, Tab, Box } from "@mui/material"

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
                <Tabs className="navbar" value={selectedTab} onChange={handleChange}>
                    <Tab className="navbar-btn-home" href="/home" label="Home"/>
                    <Tab className="navbar-btn-bookmarks" href="/bookmarks" label="Bookmarks"/>
                    <Tab className="navbar-btn-account" href="/account" label="Account"/>
                    <Tab className="navbar-btn-logout" onClick={handleSignout} label="Logout"/>
                </Tabs>
            </Box>
        </div>
    )
}