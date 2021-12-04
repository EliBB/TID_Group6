import React from 'react';
import BackButton from '../smallComponents/Buttons/BackButton';
import GreenButton from '../smallComponents/Buttons/GreenButton';
import './ExcursionInfo.css';
import ScrollableTable from '../smallComponents/ScrollableTable';

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

    const shoppinglist = [
        {id: 1, item: "Bread", amount: 10, unit: "kg"},
        {id: 2, item: "Salmon", amount: 5, unit: "kg"},
        {id: 3, item: "Rice", amount: 8, unit: "kg"},
        {id: 4, item: "Grill Meat", amount: 10, unit: "kg"},
        {id: 5, item: "Regular Milk", amount: 10, unit: "Liter"},
        {id: 6, item: "Bread", amount: 10, unit: "kg"},
        {id: 7, item: "Salmon", amount: 5, unit: "kg"},
        {id: 8, item: "Rice", amount: 8, unit: "kg"},
        {id: 9, item: "Grill Meat", amount: 10, unit: "kg"},
        {id: 10, item: "Regular Milk", amount: 10, unit: "Liter"},
        {id: 11, item: "Bread", amount: 10, unit: "kg"},
        {id: 12, item: "Salmon", amount: 5, unit: "kg"},
        {id: 13, item: "Rice", amount: 8, unit: "kg"},
        {id: 14, item: "Grill Meat", amount: 10, unit: "kg"},
        {id: 15, item: "Regular Milk", amount: 10, unit: "Liter"},
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
                <ScrollableTable listItems={shoppinglist}/>

                <h1>Duty List</h1>


                <BackButton onClick={goBackStep}/>
            </div> 
            ))}
           
        </>
    )
}

export default ExcursionInfo;