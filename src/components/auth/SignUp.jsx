import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const initialValues = () => ({
        email: '',
        password: '',
    })
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                {email}
            </form>
        </div>
    )
}

export default SignUp