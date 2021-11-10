import React from 'react';
import {BrowserRouter as Router, Link, BrowserRouter} from "react-router-dom";

import './InfoOrganizer.css';

function excursionInfo(){
    return(
        <div>
            <div>
                <h1>MenuBar</h1>
            </div>
            <div className="excursion_info">
                <h2>Excursion name</h2>
                <h2>|</h2>
                <h2>Excursion place</h2>
                <h2>|</h2>
                <h2>Excursion date</h2>
            </div>

            <div className="nr_members">
                <div className="head">
                    <h5>Number of people</h5>
                </div>
                <div className="people"> 
                    <h3>Adults: 40</h3> 
                    <h3>Teenagers: 12</h3>
                    <h3>Children: 14</h3>
                </div>
            </div>

            <div className="ShoppingList">
                <h1>Shopping list</h1>
                <div className="s_edit_bnt">
                    <h6>Edit</h6>
                </div>
            </div>

            <div className="Duties">
                <h2>Duty List</h2>
            </div>
        </div>

    );
}

export default excursionInfo;