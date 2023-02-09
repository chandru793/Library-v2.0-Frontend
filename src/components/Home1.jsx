import React from 'react'
import LogoText from '../assets/img/LogoText.png'
import '../assets/css/Home1.css'
import Font from 'react-font'

const Home1 = () => {
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