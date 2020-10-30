import React, { useState, useEffect } from 'react'
import './sidebarChat.css'
import { Avatar } from '@material-ui/core'


function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>last message...</p>
            </div>
        </div>
    ) : <div onClick={createChat}
        className="createNewChat">
            <h1>Add New Chat</h1>
        </div>
}

export default SidebarChat
