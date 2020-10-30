import React, { useState } from 'react'
import './mainChat.css'
import { Avatar } from '@material-ui/core'
function MainChat() {
    const [seed, setSeed] = useState('')

    return (
        <div className="mainChat">
            <div className="mainChat_header">
                <Avatar />
            </div>
            <div className="mainChat_body">

            </div>
            <div className="mainChat_footer">

            </div>

        </div>
    )
}

export default MainChat
