import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch(`http://localhost:8081/api/login`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data);
        if (data.user) {
            // alert("Login Successful")
            localStorage.setItem('token', data.user)
            localStorage.setItem('name', data.name)
            navigate("/home")
        } else {
            alert(`chexk your username and password`)
        }
        console.log(data);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type='submit' value="Submit" />
                {/* {email} */}
            </form>
        </div>
    )
}

export default Login