import React from 'react'
import './sidebarChat.css'
import { Avatar } from '@material-ui/core'
function SidebarChat() {
    return (
        <div>
            <Avatar src="https://avatars.dicebear.com/api/human/" />
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
