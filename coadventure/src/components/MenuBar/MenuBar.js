import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Home from './MenuBarItems/Home/Home';
import Excursions from './MenuBarItems/Excursions/Excursions';
import BookSeats from './MenuBarItems/BookSeats/BookSeats';
import Feedback from './MenuBarItems/Feedback/Feedback';
import './MenuBar.css';

function MenuBar(){
    return(
        <BrowserRouter>
            <div className="container">
                <div className="link">
                    <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                </div>

                <div className="link">
                    <NavLink to="/Excursions" activeStyle>
                        Excursions
                    </NavLink>
                </div>

                <div className="link">
                    <NavLink to="/BookSeats" activeStyle>
                        Book Seats
                    </NavLink>
                </div>

                <div className="link">
                    <NavLink to="/Feedback" activeStyle>
                        Feedback
                    </NavLink>
                </div>
            </div>

            <Switch>
                <Route path="/home" render={Home}/>
                <Route path="/excursions" render={Excursions}/>
                <Route path="/bookSeats" render={BookSeats}/>
                <Route path="/feedback" render={Feedback}/>
            </Switch>
        </BrowserRouter>

    )
}

export default MenuBar;

