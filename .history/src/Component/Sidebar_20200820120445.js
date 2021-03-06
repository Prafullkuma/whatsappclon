import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import './Sidebar.css'
import SidebarChat from './Chat/SidebarChat';
import db from '../firebase';
function Slidebar() {
    const [rooms, setRoom] = useState([])
    useEffect(() => {

        db.collection('rooms').onSnapshot((snapshot) => setRoom(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        ))


    }, [])



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
                <div className="search_container">
                    <SearchIcon />
                    <input type="text"
                        placeholder="Search Here" />
                </div>
            </div>
            <div className="sidebar_chat">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div >
    )
}

export default Slidebar
