import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
function Login() {
    const singIn = () => {
        console.log("Datata")
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="" alt="" />
                <div className="Login_text">
                    <h1>Sign in to whatsapp</h1>
                </div>
                <Button type="submit" onClick={singIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
