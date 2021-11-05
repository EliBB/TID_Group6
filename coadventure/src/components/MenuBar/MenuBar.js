import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Home from './MenuBarItems/Home/Home';
import Excursions from './MenuBarItems/Excursions/Excursions';
import BookSeats from './MenuBarItems/BookSeats/BookSeats';
import Feedback from './MenuBarItems/Feedback/Feedback';
import './MenuBar.css';
import { BiHomeAlt } from "react-icons/bi"

;
function MenuBar(){
    return(
        <BrowserRouter>
            <div className="menu-container">
                <div className="menu-link" id="home-icon-link">
                    <NavLink to="/" activeStyle>
                    <BiHomeAlt id="home-icon"/>
                    </NavLink>
                </div>

                <div className="menu-link">
                    <NavLink to="/Excursions" activeStyle>
                        Excursions
                    </NavLink>
                </div>

                <div className="menu-link">
                    <NavLink to="/BookSeats" activeStyle>
                        Book Seats
                    </NavLink>
                </div>

                <div className="menu-link">
                    <NavLink to="/Feedback" activeStyle>
                        Feedback
                    </NavLink>
                </div>
            </div>

            <Switch>
                <Route path="/excursions" render={Excursions}/>
                <Route path="/bookSeats" render={BookSeats}/>
                <Route path="/feedback" render={Feedback}/>
                <Route path="/" render={Home}/>
            </Switch>
        </BrowserRouter>

    )
}

export default MenuBar;
