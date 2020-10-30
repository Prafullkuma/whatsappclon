import React, { useState, useEffect } from 'react'
import './sidebarChat.css'
import { Avatar } from '@material-ui/core'
import db from '../../firebase'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Redux/StateProvider'

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('')
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for room")
        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }

    }
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={user?.photoURL} /> {/*src={`https://avatars.dicebear.com/api/human/${seed}.svg`}*/}
                <div className="sidebarchat_info">
                    <h2>{name}</h2>
                    <p>last message...</p>
                </div>
            </div>
        </Link>

    ) : <div onClick={createChat}
        className="createNewChat">
            <h1>Add New Chat</h1>
        </div>
}

export default SidebarChat
