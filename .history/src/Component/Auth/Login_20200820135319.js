import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
function Login() {
    const singIn = () => {
        auth.signInWithPopup(provider)
            .then(result => console.log(result))
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://i.pinimg.com/originals/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.png"
                    alt="Whats App" />
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
