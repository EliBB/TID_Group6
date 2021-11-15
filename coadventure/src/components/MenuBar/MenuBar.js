import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from "react-icons/bi";
import { FaUser } from 'react-icons/fa';

import './MenuBar.css';

function MenuBar(){

    const menuLinks = [
        {menuItem: <BiHomeAlt/>, link: '/', linkId: 1},
        {menuItem: 'Excursions', link: '/Excursions', linkId: 2},
        {menuItem: 'Book Seats', link: '/BookSeats', linkId: 3},
        {menuItem: 'Feedback', link: '/Feedback', linkId: 4},
        {menuItem: <FaUser/>, link: '/Profile', linkId: 5}
    ]

    return(
        <header>
            <div className="menu-container">
                {menuLinks.map(links => (
                    <div className="menu-link" key={links.linkId}>
                        <Link to={links.link}>
                            {links.menuItem}
                        </Link>
                    </div>
                ))}
            </div>
        </header>
    )
}

export default MenuBar;

