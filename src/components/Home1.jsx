import React from 'react'
import LogoText from '../assets/img/LogoText.png'
import '../assets/css/Home1.css'
import Font from 'react-font'
import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";


const Home1 = () => {
    const navigate = useNavigate();


    async function populate() {
        const req = await fetch(`http://localhost:8081/api/quote`, {
            headers: {
                'x-access-token':localStorage.getItem('token'),
            }
        })
        const data = req.json();
        console.log(data);
    }
    
    const token = localStorage.getItem('token')
    if (token) {
        const user = jwt.decode(token)
        if (!user) {
            localStorage.removeItem('token')
            navigate('/login')
        } else {
            populate()
        }
    }

    return (
        <div className='containerHome'>
            <div className='textContainer'>
                <Font family='Bungee Shade' className='font1'>Readers</Font>
                <Font family='Bungee Outline'>Are</Font>
                <Font family='Bungee Shade' className='font1'>Leaders</Font>
            </div>
            <div className='imgContainer'>
                <img src={LogoText} />
            </div>
        </div>
    )
}

export default Home1