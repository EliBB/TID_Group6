import React from 'react';
import './ExcursionInfo.css';
import BtnLink from "../smallComponents/BtnLink"

function ExcursionInfo(){

    const excursionInfo = [
        {excursionId: 1, 
        type: 'Wilderness Trip', 
        where: 'Sweden', 
        date: '31. june - 5 july 2022',
        adults: 40,
        teenagers: 12,
        children: 14,
        shoppingList: []
    },
        
    ]

    return(
        <div className="excursionInfo-container">
            {excursionInfo.map(excursion => (
            <div>  
                <div className="excursionInfo-row" key={excursion.excursionId}>
                    <div className="excursionInfo-col">
                        <div className="excursionInfo-col-items">
                            <p>{excursion.type}</p>
                        </div>

                        <div className="excursionInfo-col-items">
                            <p>{excursion.where}</p>
                        </div>

                        <div className="excursionInfo-col-items">
                            <p>{excursion.date}</p>
                        </div>   
                    </div>
                </div>

                <div className="info-container">
                    <div className="info-row" id="info-row1">
                        <div className="info-col">
                            <div className="info-col-items">
                                <p>Adults: {excursion.adults}</p>
                            </div>

                            <div className="info-col-items">
                                <p>Teenagers: {excursion.teenagers}</p>
                            </div>

                            <div className="info-col-items">
                                <p>Children: {excursion.children}</p>
                            </div>
                        </div>    
                    </div>

                    <div className="info-row" id="info-row2">
                        <div>
                            <BtnLink actionBtn="Sign up" link="/memberRegistration"></BtnLink>
                        </div>
                    </div>
                </div>
            
            </div> 
            ))}
        </div>
    )
}

export default ExcursionInfo;