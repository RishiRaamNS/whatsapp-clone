import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat"

function Sidebar() {
    return <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src="https://avatars.githubusercontent.com/u/76812006?v=4"/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert/> 
                </IconButton>
            </div>
        </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or start new chat" type="text"/>
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
}

export default Sidebar;