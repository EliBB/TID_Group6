import React from "react";
import './List.css'
import ScrollableTable from "../components/smallComponents/ScrollableTable";

function DutyList(){

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
        <div className="shopping-list-container">
            <h1>Duty List</h1>

            {excursionInfo.map(excursion => (
            <div className="information-list">
                <div className="excursion-information-container">
                    <div className="excursion-info">
                        <h2>Excursion information</h2>
                        <p>What: {excursion.type}</p>
                        <p>Where: {excursion.where}</p>
                        <p>When: {excursion.date}</p>
                    </div>

                    <div className="excursion-info">
                        <h2>Number of people</h2>
                        <p>Adults: {excursion.adults}</p>
                        <p>Teenagers: {excursion.teenagers}</p>
                        <p>Children: {excursion.children}</p>
                    </div>
                </div>

                <ScrollableTable 
                listItems={dutyList}
                headerOne="Duty"
                headerTwo="Boss"
                headerThree="Manning"/>
            </div>
            ))}
        </div>
    )
}

export default DutyList;