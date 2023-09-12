import React from 'react'
import { useState } from 'react'
import '../../assets/css/auth.css'
import { useNavigate } from "react-router-dom";

//image
import LogoText from '../../assets/img/LogoTextCrop.png'

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const initialValues = () => ({
    //     email: '',
    //     password: '',
    // })

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_HOST_URL}/api/signup`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data);

        if (data.status === "ok") {
            // window.location.href = '/login'
            navigate("/login")
        }
    }   

    return (
        <div className='authContainer'>
            <div className='imageDiv'>
                <img src={LogoText} className='image'/>
            </div>
            <div className='authInnerContainer'>
                <h1 className='authh1'x >Sign Up</h1>
                <form onSubmit={registerUser} className='form'>
                    <label for='name' className='label'>Name:</label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Name"
                        value={name}
                        className='input'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for='name'className='label'>E-mail:</label>
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
                        name='password'
                        placeholder="Password"
                        value={password}
                        className='input'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type='submit' value="Submit" className='button' />
                </form>
                <p className='p'>Already a user? <span className='span' onClick={()=>navigate("/login")}>Login</span></p>
            </div>
        </div>
    )
}

export default SignUp