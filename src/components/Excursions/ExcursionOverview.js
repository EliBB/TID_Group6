import React from "react";
import OverviewExcursions from "../smallComponents/OverviewExcursions";
import './ExcursionOverview.css'
import PageHeader from "../smallComponents/PageHeader";
import GreenButton from "../smallComponents/Buttons/GreenButton";

const ExcursionOverview = ({goNextStep}) => {

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    ]
    
    return(
        <>
            <PageHeader
                pageTitle="Excursions"
            />

            <div className="all-excursions">
                {excursions.map(excursion => (
                    <div className="one-excursion" key={excursion.excursionId}>
                        <OverviewExcursions 
                            type={excursion.type}
                            where={excursion.where}
                            date={excursion.date}
                            actionBtn="Get Info">
                        </OverviewExcursions>

                        <div className="button-getinfo">
                            <GreenButton text="Get info" onClick={goNextStep}/>
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default ExcursionOverview;