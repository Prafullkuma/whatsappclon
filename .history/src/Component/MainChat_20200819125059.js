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
            </div>
            <div className="mainChat_body">

            </div>
            <div className="mainChat_footer">

            </div>

        </div>
    )
}

export default MainChat
