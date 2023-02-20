import React from 'react'
import LogoText from '../assets/img/LogoText.png'
import '../assets/css/Home1.css'
import Font from 'react-font'
import jwt from 'jsonwebtoken'

const Home1 = () => {
    // const history = useHistory()

    // async function populate(){}
    
    const token = localStorage.getItem('Item')
    if (token) {
        const user = jwt.decode(token)
        if (!user) {
            localStorage.removeItem('token')
            window.location.href='/login'
        } else {
            // populate()
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