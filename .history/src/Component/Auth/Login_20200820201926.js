import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../Redux/reducer'
import { useStateValue } from '../Redux/StateProvider'
function Login() {
    const [{ }, dispatch] = useStateValue();

    const singIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) =>
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            )
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
