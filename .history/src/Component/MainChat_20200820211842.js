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
import { useStateValue } from './Redux/StateProvider';
import firebase from 'firebase'
function MainChat() {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomid } = useParams()
    const [roomName, setRoomName] = useState('')
    const [message, setMessages] = useState([])
    const [{ user }, dispatch = useStateValue()]


    useEffect(() => {
        //for Rooms
        db.collection('rooms').doc(roomid).onSnapshot((snapshot) => setRoomName
            (snapshot.data().name))
        //for messages
        db.collection('rooms').doc(roomid).collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data())))

    }, [roomid])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()

        //for show messages based on room
        db.collection('rooms').doc(roomid).collection('messages')
            .add({
                message: input,
                name: user.displayName,//getting from Auth name google firebase displayName
                timestamp: firebase.firestore.FieldValue.serverTimestamp() //getting server TimeStamp
            })

        setInput('')
    }

    return (
        <div className="mainChat">
            <div className="mainChat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at{new Date(message[message.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
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
                {message.map((message) => (
                    <p className={`chat_message ${message.name === user.displayName && "chat_receiver"}`}>
                        <span className="chat__name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="time_stamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>

                ))}

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
