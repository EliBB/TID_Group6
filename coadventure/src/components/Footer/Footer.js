import React from 'react';
import './Footer.css';
import Logo from '../../images/Logo_CoAdventure.png';

function Footer(){
    return(
        <footer className="footer-container">
            <img src={Logo} className="logo" alt="Logo"/>
        </footer>
    )
}

export default Footer;