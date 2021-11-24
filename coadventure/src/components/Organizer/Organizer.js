import React from 'react';
import OverviewExcursions from '../smallComponents/OverviewExcursions';
import ColoredLine from '../smallComponents/LineHeader';
import "./Organizer.css";
import BtnLink from '../smallComponents/BtnLink';

function Organizer(){

    const btnLink="";

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    ]

    return(
        <div className="organizer-container">
            <div className="organizer-header">
                <div className="header-organizer">
                    <p className="header1">Excursions</p>
                </div>
                

                <div className="horizontal-line">
                    <ColoredLine></ColoredLine>
                </div>
            </div>

            <div className="excursions-organizer">
                <div className="button-create">
                    <button className="green-btn">
                        Create Excursion
                    </button>
                </div>

                <div className="all-excursions">
                    {excursions.map(excursion => (
                        <div className="one-excursion" key={excursion.excursionId}>

                            <div className="info-excursion">
                                <OverviewExcursions type={excursion.type}
                                where={excursion.where}
                                date={excursion.date}
                                actionBtn="Get Info"></OverviewExcursions>
                            </div>

                            <div className="button-getInfo">
                                <BtnLink className="button-info" actionBtn="Get info" link={btnLink}></BtnLink>
                            </div>
                        
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}

export default Organizer;