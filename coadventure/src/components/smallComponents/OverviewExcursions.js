import React from "react";
import "./OverviewExcursions.css";

function OverviewExcursions(props){
    
    return(
        <div className="overview-container">
            <fieldset className="info-excursion-container">
                <legend className="border-header">
                    Where
                </legend>

                <div className="info">
                    <p className="header2">{props.type}</p>
                </div>

                <p className="line">|</p>

                <div className="info">
                    <p className="header2">{props.where}</p>
                </div>

                <p className="line">|</p>

                <div className="info">
                    <p className="header2">{props.date}</p>
                </div>

            </fieldset>

        </div>
    )

}

export default OverviewExcursions;