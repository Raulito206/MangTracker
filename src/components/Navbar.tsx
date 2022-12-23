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
        <div className="navbar">
            <Box>
                <Tabs value={selectedTab} onChange={handleChange} aria-label="nav tabs example">
                    <Tab href="/home" label="Home"/>
                    <Tab href="/bookmarks" label="Bookmarks"/>
                    <Tab href="/account" label="Account"/>
                    <Tab onClick={handleSignout} label="Logout"/>
                </Tabs>
            </Box>
        </div>
    )
}