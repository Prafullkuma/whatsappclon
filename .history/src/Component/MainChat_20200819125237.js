import React, { useState, useEffect } from 'react'
import './mainChat.css'
import { Avatar } from '@material-ui/core'
function MainChat() {
    const [seed, setSeed] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="mainChat">
            <div className="mainChat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h1>Room Name</h1>
                    <p>Last seen at..</p>
                </div>
            </div>
            <div className="mainChat_body">

            </div>
            <div className="mainChat_footer">

            </div>

        </div>
    )
}

export default MainChat
