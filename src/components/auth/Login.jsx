import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../../assets/css/auth.css"
import { ToastContainer } from "react-toastify";


//image
import LogoText from '../../assets/img/LogoTextCrop.png'

//toast
import { authFailed } from '../Toast'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_HOST_URL}/api/login`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        // console.log(response)

        const data = await response.json()
        console.log(data);
        if (data.user) {
            // alert("Login Successful")
            localStorage.setItem('token', data.user)
            localStorage.setItem('name', data.name)
            navigate("/home")
        } else {
            // alert(`chexk your username and password`)
            console.log("failed")
            authFailed();
        }
        // console.log(data);
    }

    return (
        <div className='authContainer'>
            <div className='imageDiv'>
                <img src={LogoText} className='image' />
            </div>
            <div className='authInnerContainer'>
                <h1 className='authh1'>Login</h1>
                <form onSubmit={loginUser} className='form'>
                    <label for='email' className='label'>E-mail:</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={email}
                        className='input'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for='password' className='label'>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={password}
                        className='input'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type='submit' value="Submit" className='button' />
                    {/* {email} */}
                </form>
                <p className='p'>New to Text-Insights? <span className='span' onClick={() => navigate("/signup")}>Register</span></p>
            </div>

            {/* Toast  */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
        </div>
    )
}

export default Login