import React from 'react';
import './Footer.css';
import Logo from '../../images/Logo_CoAdventure.png';

function Footer(){
    return(
        <div className="footer-container">
            <img src={Logo} className="logo"/>
            <p>This is our footer</p>
        </div>
    )
}

export default Footer;