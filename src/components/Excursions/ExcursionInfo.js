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

    const shoppingList = [
        {id: 1, col1: "Bread", col2: 10, col3: "kg"},
        {id: 2, col1: "Salmon", col2: 5, col3: "kg"},
        {id: 3, col1: "Rice", col2: 8, col3: "kg"},
        {id: 4, col1: "Grill Meat", col2: 10, col3: "kg"},
        {id: 5, col1: "Regular Milk", col2: 10, col3: "Liter"},
        {id: 6, col1: "Bread", col2: 10, col3: "kg"},
        {id: 7, col1: "Salmon", col2: 5, col3: "kg"},
        {id: 8, col1: "Rice", col2: 8, col3: "kg"},
        {id: 9, col1: "Grill Meat", col2: 10, col3: "kg"},
        {id: 10, col1: "Regular Milk", col2: 10, col3: "Liter"},
        {id: 11, col1: "Bread", col2: 10, col3: "kg"},
        {id: 12, col1: "Salmon", col2: 5, col3: "kg"},
        {id: 13, col1: "Rice", col2: 8, col3: "kg"},
        {id: 14, col1: "Grill Meat", col2: 10, col3: "kg"},
        {id: 15, col1: "Regular Milk", col2: 10, col3: "Liter"},
    ]

    const dutyList = [
        {id: 1, col1: "Clean up friday", col2: "Jens", col3: "Peter, Marie"},
        {id: 2, col1: "Shopping", col2: "Jens", col3: "Peter, Marie"},
        {id: 3, col1: "clean up saturday", col2: "Jens", col3: "Peter, Marie"},
        {id: 4, col1: "Accounting", col2: "Jens", col3: "Peter, Marie"},
        {id: 5, col1: "Plan treasure hunt", col2: "Jens", col3: "Peter, Marie"},
        {id: 6, col1: "Treasure hun staff", col2: "Jens", col3: "Peter, Marie"},
        {id: 7, col1: "Cooking friday lunch", col2: "Jens", col3: "Peter, Marie"},
        {id: 8, col1: "Cooking saturday dinner", col2: "Jens", col3: "Peter, Marie"},
        {id: 9, col1: "Dishes friday lunch", col2: "Jens", col3: "Peter, Marie"},
        {id: 10, col1: "Dishes friday dinner", col2: "Jens", col3: "Peter, Marie"},
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
                        
                <div>
                <h1>Shopping List</h1>
                
                </div>
                <ScrollableTable 
                listItems={shoppingList}
                headerOne="Item"
                headerTwo="Amount"
                headerThree="Unit"/>

                <h1>Duty List</h1>
                <ScrollableTable 
                listItems={dutyList}
                headerOne="Duty"
                headerTwo="Boss"
                headerThree="Manning"/>

                <BackButton onClick={goBackStep}/>
            </div> 
            ))}
           
        </>
    )
}

export default ExcursionInfo;