import React from "react";
import "./OverviewExcursions.css";
import { Link } from "react-router-dom";

function OverviewExcursions(props){

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    
    ]

    const handleClick = (event) => {
        if(event === "Delete Registration"){
            alert("Are you sure you want to delete your registration?");
            // Call delete excursion from database...
        }
        else{
            return;
        }
    }
    

    return(
        <div>
            {excursions.map(excursion => (
                <div className="overview-container" key={excursion.excursionId}>
                    <fieldset className="info-excursion-container">
                        <legend className="border-header">
                            Where
                        </legend>

                        <div className="info">
                            <p className="header2">{excursion.type}</p>
                        </div>

                        <h1 className="line">|</h1>

                        <div className="info">
                            <p className="header2">{excursion.where}</p>
                        </div>

                        <h1 className="line">|</h1>

                        <div className="info">
                            <p className="header2">{excursion.date}</p>
                        </div>

                    </fieldset>
                    
                    <div className="button-column">
                        <Link to={props.linkBtn} onClick={() => handleClick(props.actionBtn)}>
                            <button className="green-btn"> 
                                {props.actionBtn}
                            </button> 
                        </Link>
                    </div>

                </div>
            ))}
        </div>
    )

}

export default OverviewExcursions;