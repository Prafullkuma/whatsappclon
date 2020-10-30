import React from 'react'
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Slidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_header_right">
                    <DonutLargeIcon />
                    <ChatBubbleIcon />
                    <MoreVertIcon />
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
