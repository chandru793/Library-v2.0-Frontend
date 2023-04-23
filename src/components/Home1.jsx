import React from 'react'
import LogoText from '../assets/img/LogoText.png'
import '../assets/css/Home1.css'
import Font from 'react-font'
import { useNavigate } from "react-router-dom";

//components
import Navbar from './Navbar'

//api
import { decode } from './Api/Api';


const Home1 = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token')
    console.log("home token",token)
    if (token) {
        const user = decode(token)
        // console.log("user success", user)
        
        if (!user) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    return (
        <>
            <Navbar />
            <div className='containerHome'>
                <div className='textContainer'>
                    <Font family='Bungee Shade' className='font1'>Readers</Font>
                    <Font family='Bungee Outline'>Are</Font>
                    <Font family='Bungee Shade' className='font1'>Leaders</Font>
                </div>
                <div className='imgContainer'>
                    <img src={LogoText}className='img' />
                </div>
            </div>
        </>
    )
}

export default Home1