import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer_content">
                <div className="footer_content_left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab, eveniet neque aspernatur fugit accusamus facilis similique iure et. Doloribus fuga voluptatibus ut illo atque voluptates blanditiis sit at reprehenderit?</p>
                    <div className="footer_social_icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer_content_center">
                    <h2>COMPAANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivary</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer_content_right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 8571067187</li>
                        <li>aniketkhatri14@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer_copyright">copyright © Tomato.com - All rights recives</p>
        </div>
    )
}

export default Footer
