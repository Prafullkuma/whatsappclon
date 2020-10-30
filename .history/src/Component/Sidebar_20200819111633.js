import React from 'react'
import { IconButton } from '@material-ui/icons'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
