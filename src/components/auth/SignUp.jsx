import React from 'react'
import { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const initialValues = () => ({
    //     email: '',
    //     password: '',
    // })

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch(`http://localhost:8081/api/signup`, {
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
            window.location.href = '/login'
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={registerUser}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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

export default SignUp