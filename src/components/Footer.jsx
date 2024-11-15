import React from 'react'
import Logo from './Logo';
import LinkedIn from '../assets/iconmonstr-linkedin-3.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-logo-wrapper">
                    <Logo />
                </div>
                <Link to="https://www.linkedin.com/company/netspeek/mycompany/" target="_blank">
                    <img src={LinkedIn} />
                </Link>
                <div className="footer-links-wrapper">   
                    <Link to="/meet-us" className="link2">Meet the team</Link>
                    <p className="vertical-divider">|</p>
                    <Link to="/terms-and-conditions" className="link2">Terms and conditions</Link>
                    <p className="vertical-divider">|</p>
                    <Link to="/privacy-policy" className="link2">Privacy policy</Link>
                    <p className="vertical-divider">|</p>
                    <Link to="/accessibility" className="link2">Web accessibility statement</Link>
                </div>
                <div className="footer-copyright-wrapper">
                    <p className="body4 primary-accent">© Copyright {new Date().getFullYear()} NetSpeek Inc. All rights reserved. Various trademarks held by their respective owners. NetSpeek Inc. 313 Washington St. Newton, MA 02458 United States</p>
                </div>
            </div>
        </>
    )
}

export default Footer