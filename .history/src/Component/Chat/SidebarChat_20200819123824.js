import React, { useState, useEffect } from 'react'
import './sidebarChat.css'
import { Avatar } from '@material-ui/core'
function SidebarChat(props) {
    const [seed, setSeed] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
