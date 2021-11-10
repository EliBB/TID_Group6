import React from 'react';
import { Route, NavLink, Switch, BrowserRouter } from "react-router-dom";
import Home from './MenuBarItems/Home/Home';
import Excursions from './MenuBarItems/Excursions/Excursions';
import BookSeats from './MenuBarItems/BookSeats/BookSeats';
import Feedback from './MenuBarItems/Feedback/Feedback';
import Member from './MenuBarItems/Home/Member/Member';
import Organizer from './MenuBarItems/Home/Organizer/Organizer';
import MemberRegistration from './MenuBarItems/Home/Member/SignUp/MemberRegistration';
import ExcursionInfo from './MenuBarItems/Home/Member/ExcursionInfo';
import excursionInfo from '../../Excursion_Info_org/infoOrganizer';
import AddMembers from './MenuBarItems/Home/Member/SignUp/AddMembers';


import './MenuBar.css';
import { BiHomeAlt } from "react-icons/bi"

;

function MenuBar(){
    return(
        <BrowserRouter>
            <div className="menu-container">
                <div className="menu-link" id="home-icon-link">
                    <NavLink to="/" >
                    <BiHomeAlt id="home-icon"/>
                    </NavLink>
                </div>

                <div className="menu-link">
                    <NavLink to="/Excursions" >
                        Excursions
                    </NavLink>
                </div>

                <div className="menu-link">
                    <NavLink to="/BookSeats" >
                        Book Seats
                    </NavLink>
                </div>

                <div className="menu-link">
                    <NavLink to="/Feedback" >
                        Feedback
                    </NavLink>
                </div>
            </div>

            <Switch>
                <Route path="/excursions" render={Excursions}/>
                <Route path="/bookSeats" render={BookSeats}/>
                <Route path="/feedback" render={Feedback}/>

                <Route path="/organizer" render={excursionInfo}/>

                <Route path="/member" exact render={Member}/>
                <Route path="/member/:excursionId" render={ExcursionInfo}/>
                <Route path="/memberRegistration" render={MemberRegistration}/>
                <Route path="/addMembers" render={AddMembers}/>
                <Route path="/" exact render={Home}/>
            </Switch>
        </BrowserRouter>

    )
}

export default MenuBar;

