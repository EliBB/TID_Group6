import React from 'react';
import { Link } from 'react-router-dom';
import Parse from "parse";
import { BiHomeAlt } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';

import './MenuBar.css';

export function MenuBar(){

    const menuLinks = [
        {menuItem: <BiHomeAlt/>, link: '/Profile', linkId: 1},
        {menuItem: 'Excursions', link: '/Excursions', linkId: 2},
        {menuItem: 'Book Seats', link: '/BookSeats', linkId: 3},
        {menuItem: 'Feedback', link: '/Feedback', linkId: 4},
        {menuItem: <FaUser/>, link: '/Profile', linkId: 5}
    ]

    return(
        <header>
            {!Parse.User.current() && (
                <div className="menu-container">
                    <div className="menu-link">
                        <Link to="/register" key="7">
                            Register
                        </Link>
                    </div>
                    
                    <div className="menu-link">
                        <Link to="/login" key="6">
                            Login
                        </Link>
                    </div>
                </div>
            )}

            {Parse.User.current() && (
                <div className="menu-container">
                    {menuLinks.map(links => (
                        <div className="menu-link" >
                            <Link to={links.link} key={links.linkId}>
                                {links.menuItem}
                            </Link>
                        </div>
                    ))}
                </div>
            
            )}
        </header>
    )
}

/* export default MenuBar; */

