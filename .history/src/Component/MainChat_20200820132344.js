import React, { useState, useEffect } from 'react'
import './mainChat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router-dom'
import db from '../firebase'
function MainChat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomid } = useParams()
    const [roomName, setRoomName] = usestate('')
    useEffect(() => {
        db.collection('rooms').doc(roomid).onSnapshot((snapshot) => setRoomName
            (snapshot.data().name))
    }, [roomid])
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("YOu types", input)
        setInput('')
    }
    return (
        <div className="mainChat">
            <div className="mainChat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
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
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    <span className="chat__name">
                        Google
                    </span>
                    hey Guys
                    <span className="time_stamp">
                        3.35pm
                    </span>
                </p>

            </div>
            <div className="mainChat_footer">

                <InsertEmoticonIcon />
                <form>
                    <input type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Enter Message Here" />
                    <IconButton>
                        <SendIcon onClick={sendMessage} />
                    </IconButton>
                </form>
                <MicIcon />

            </div>

        </div>
    )
}

export default MainChat
