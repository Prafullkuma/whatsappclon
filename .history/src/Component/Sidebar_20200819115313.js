import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Sidebar.css'
function Slidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />

                    </IconButton>
                    <IconButton>
                        <ChatBubbleIcon />

                    </IconButton>
                    <IconButton>

                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">

            </div>
            <div className="sidebar_chat">

            </div>
        </div >
    )
}

export default Slidebar
