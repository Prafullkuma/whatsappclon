import React, { useState, useEffect } from 'react'
import './mainChat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import MoreVertIcon from '@material-ui/icons/MoreVert';

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
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton><MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mainChat_body">
                <p className="chat_message">
                    hey Guys
                </p>

            </div>
            <div className="mainChat_footer">

            </div>

        </div>
    )
}

export default MainChat
