import React from 'react';
import { Link } from 'react-router-dom';
import Parse from "parse";
import { FaUser } from 'react-icons/fa';
import './MenuBar.css';

export function MenuBar(){

    const menuLinks = [
        {menuItem: 'Excursions', link: '/Excursions'},
        {menuItem: 'Book Seats', link: '/BookSeats'},
        {menuItem: 'Feedback', link: '/Feedback'},
        {menuItem: <FaUser/>, link: '/Profile'}
    ]

    return(
        <header>
            {!Parse.User.current() && (
                <div className="menu-container">
                    <div className="menu-link">
                        <Link to="/register" key="register">
                            <h2>Register</h2>
                        </Link>
                    </div>
                    
                    <div className="menu-link">
                        <Link to="/login" key="login">
                            <h2>Login</h2>
                        </Link>
                    </div>
                </div>
            )}

            {Parse.User.current() && (
                <div className="menu-container">
                    {menuLinks.map(links => (
                        <div className="menu-link" >
                            <Link to={links.link} key={links.link}>
                                <h2>{links.menuItem}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            
            )}
        </header>
    )
}

/* export default MenuBar; */

