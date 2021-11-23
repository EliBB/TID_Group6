import React from "react";

const ExcursionOverview = ({goNextStep}) => {

    const excursions = [
        {excursionId: 1, type: 'Wilderness Trip', where: 'Sweden', date: '31. june - 5 july 2022'},
        {excursionId: 2, type: 'Cottage Trip', where: 'Norway', date: '4-7 january 2022'},
        {excursionId: 3, type: 'Glamping', where: 'Denmark', date: '10-12 september 2022'},
    ]
    
    return(
        <div className="data">            
            {excursions.map(excursion => (
                <div className="info-row">
                    <div className="row">
                        <div className="row-item" key={excursion.excursionId}>  
                            <div className="col-item">
                                <p>Type</p>
                                <h3>{excursion.type}  </h3>
                            </div>

                            <div className="col-item">
                                <p>Where</p>
                                <h3>{excursion.where} </h3>
                            </div>

                            <div className="col-item">
                                <p>Date</p>
                                <h3>{excursion.date}</h3>
                            </div>
                        </div>
                    </div>
                        
                    <div>
                        <button className="green-button" onClick={goNextStep}>
                            Get info
                        </button>
                    </div>
                </div>
            ))}
        </div>           
    )
}

export default ExcursionOverview;