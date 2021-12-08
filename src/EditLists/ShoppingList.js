import React from "react";
import './List.css';
import ScrollableTable from "../components/smallComponents/ScrollableTable";

function ShoppingList(){

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

    return(
        <div className="shopping-list-container">
            <h1>Shopping List</h1>

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
                className="shopping-list-component"
                listItems={shoppingList}
                headerOne="Item"
                headerTwo="Amount"
                headerThree="Unit"/>
            </div>
            ))}
        </div>
    )
}

export default ShoppingList;