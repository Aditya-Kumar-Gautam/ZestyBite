import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='company-logo' src={assets.logo_dark} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nihil. Neque dolore, ipsa placeat accusantium aliquid, suscipit architecto nihil dolor odio impedit voluptatibus harum, necessitatibus at ab quidem odit officiis.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-0123456789</li>
                    <li>contact@zestybite.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © ZestyBite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer