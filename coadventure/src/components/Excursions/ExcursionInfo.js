import React from 'react';
import './ExcursionInfo.css';


const ExcursionInfo = ({goNextStep, goBackStep}) => {

    const excursionInfo = [
        {excursionId: 1, 
        type: 'Wilderness Trip', 
        where: 'Sweden', 
        date: '31. june - 5 july 2022',
        adults: 40,
        teenagers: 12,
        children: 14,
        shoppingList: []
        }
    ]

    return(
        <div className="placeholder">
            {excursionInfo.map(excursion => (
            <div className="data">  
                <div className="data-row" key={excursion.excursionId}>
                    
                        <div className="item">
                            <p>{excursion.type}</p>
                        </div>

                        <div className="item">
                            <p>{excursion.where}</p>
                        </div>

                        <div className="item">
                            <p>{excursion.date}</p>
                        </div>   
                    
                </div>
                

                <div className="info-row">
                    <div className="row">
                        <div className="row-spec">
                            <p>Number of people: </p>
                        </div>

                        <div className="row-item">
                            <div className="col-item">
                                <h3>Adults: {excursion.adults}</h3>
                            </div>

                            <div className="col-item">
                                <h3>Teenagers: {excursion.teenagers}</h3>
                            </div>

                            <div className="col-item">
                                <h3>Children: {excursion.children}</h3>
                            </div>
                        </div>

                    </div>

                    <button className="green-button" type="submit" onClick={goNextStep}>
                        Sign up 
                    </button>

                </div>
                        
                <div className="button-row">  
                    <div>
                        <h1>Shopping List</h1>
                    </div>
                    <div>
                        <h1>Duty List</h1>
                    </div>

                </div>

                <button className="green-button" onClick={goBackStep}>
                    Back
                </button>
            </div> 
            ))}
           
        </div>
    )
}

export default ExcursionInfo;