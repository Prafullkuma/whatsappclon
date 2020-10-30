import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core'


function Slidebar() {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <IconButton>
                <AccountCircleIcon />

            </IconButton>
        </div>
    )
}

export default Slidebar
