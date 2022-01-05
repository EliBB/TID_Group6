import React from 'react';
import {BrowserRouter as Router, Link, BrowserRouter} from "react-router-dom";

import './InfoOrganizer.css';
import { BiHomeAlt, BiPencil } from "react-icons/bi"



function excursionInfo(){
    return(
        <div>
            <div className="excursion_info">
                <h2>Excursion name</h2>
                <h2>|</h2>
                <h2>Excursion place</h2>
                <h2>|</h2>
                <h2>Excursion date</h2>
            </div>

            <div className="nr_members">
                <div className="headline_members">
                    <h5>Number of people</h5>
                </div>
                <div className="nr_people"> 
                    <h3>Adults: 40</h3> 
                    <h3>Teenagers: 12</h3>
                    <h3>Children: 14</h3>
                </div>
            </div>

            <div className="ShoppingList">
                <h2>Shopping list</h2>
                <div className="s_edit_bnt">
                    <h5>Edit</h5>
                    <BiPencil id="pencil-icon"/>
                </div>
            </div>

            <div className="DutyList">
                <h2>Duty List</h2>
                <div className="s_edit_bnt">

                    <h5>Edit</h5>
                    <BiPencil id="pencil-icon"/>
                </div>
            </div>
        </div>

    );
}

export default excursionInfo;