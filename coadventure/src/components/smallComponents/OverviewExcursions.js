import React from "react";
import "./OverviewExcursions.css";
import { useState } from "react";
import AlertDelete from "./AlertDelete";

function OverviewExcursions(props){

    const [buttonAlert, setButtonAlert] = useState(false);

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    
    ]

    const handleClick = (event) => {
        if(event === "Delete Registration"){
            <alert>nono </alert>

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
                        <button className="green-btn" onClick={() => setButtonAlert(true)}> 
                            {props.actionBtn}
                        </button>
                    </div>

                </div>
            ))}

            <AlertDelete trigger={buttonAlert} setTrigger={setButtonAlert}></AlertDelete>
        </div>
    )

}

export default OverviewExcursions;

//handleClick(props.actionBtn)