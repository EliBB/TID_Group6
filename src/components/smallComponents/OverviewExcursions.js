import React from "react";
import "./OverviewExcursions.css";

function OverviewExcursions(props){
    
    return(
        <div className="overview-container">
            <div className="border-header">
                <p className="header">
                    Type
                </p>
                <p className="header">
                    Where
                </p>
                <p className="header">
                    Date
                </p>
            </div>
            <div className="info-excursion-container">

                <div className="info">
                    <h2>{props.type}</h2>
                </div>

                <p className="line">|</p>

                <div className="info">
                    <h2>{props.where}</h2>
                </div>

                <p className="line">|</p>

                <div className="info">
                    <h2>{props.date}</h2>
                </div>

            </div>

        </div>
    )

}

export default OverviewExcursions;


/*
<div className="overview-container">
            <fieldset className="info-excursion-container">
                <legend className="border-header">
                    Where
                </legend>

                <div className="info">
                    <h2>{props.type}</h2>
                </div>

                <p className="line">|</p>

                <div className="info">
                    <h2>{props.where}</h2>
                </div>

                <p className="line">|</p>

                <div className="info">
                    <h2>{props.date}</h2>
                </div>

            </fieldset>

        </div>
*/