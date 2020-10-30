import React from 'react'
import { Avatar } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

function Slidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <SettingsIcon />
            </div>
            <div className="sidebar_search">

            </div>
            <div className="sidebar_chat">

            </div>
        </div >
    )
}

export default Slidebar
