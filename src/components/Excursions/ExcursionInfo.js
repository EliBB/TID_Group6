import React from 'react';
import BackButton from '../smallComponents/Buttons/BackButton';
import GreenButton from '../smallComponents/Buttons/GreenButton';
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
        <>
            {excursionInfo.map(excursion => (
            <div className="single-excursion-overview">  
                <div className="single-excursion-row">
                    <p>{excursion.type}</p>
                    <p>{excursion.where}</p>
                    <p>{excursion.date}</p>
                </div>
                

                <div className="detail-row">
                    <div className="specification-row">
                        <div className="specification-text">
                            <p>Number of people: </p>
                        </div>

                        <div className="specification-items">
                                <h3>Adults: {excursion.adults}</h3>
                                <h3>Teenagers: {excursion.teenagers}</h3>
                                <h3>Children: {excursion.children}</h3>
                        </div>
                    </div>

                    <GreenButton text="Sign up" onClick={goNextStep}/>
                </div>
                        

                <h1>Shopping List</h1>

                <h1>Duty List</h1>


                <BackButton onClick={goBackStep}/>
            </div> 
            ))}
           
        </>
    )
}

export default ExcursionInfo;