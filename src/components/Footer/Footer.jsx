import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src="/logo_img.ico" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt est ut quaerat quis quidem tempore suscipit quae molestias provident optio amet itaque non officia repudiandae, laudantium, dolor natus ipsa quia?</p>
                <div className="footer-social-items">
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
                    <li>+1654-654-3512</li>
                    <li>tomatocontact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-copyright">
            <p>Copyright 2025 © Tomato.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer