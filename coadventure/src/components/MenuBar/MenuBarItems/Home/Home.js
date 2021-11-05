import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Member from './Member/Member';
import Organizer from './Organizer/Organizer';
import './Home.css';


function Home(){
    return(
        <BrowserRouter>
            <div className="home-container">
                <div className="home-col">
                    <div className="home-btn">
                        <NavLink to="/Organizer" activeStyle>
                            Organizer
                        </NavLink>
                    </div>
                </div>

                <div className="home-col">
                    <div className="home-btn">
                        <NavLink to="/Member" activeStyle>
                            Member
                        </NavLink>
                    </div>
                </div>
            </div>

            <Switch>
                <Route path="/organizer" render={Organizer}/>
                <Route path="/member" render={Member}/>
            </Switch>
        </BrowserRouter>
    
    )
}

export default Home;