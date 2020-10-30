import React, { useState, useEffect } from 'react'
import './sidebarChat.css'
import { Avatar } from '@material-ui/core'
function SidebarChat() {
    const [seed, setSeed] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
