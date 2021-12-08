import React from 'react';
import './BookCarSeats.css'
import NextButton from '../smallComponents/Buttons/NextButton';

const BookCarSeats = ({goNextStep}) => {

    const listItems = [
        {id: 1, who: 'Jens Jensen', seats: '3/5', typeCar: 'Peugeut 307 grey', where: 'Herlev'},
        {id: 2, who: 'Kristin Petersen', seats: '1/4', typeCar: 'Volkswagen UP green', where: 'Herlev'},
        {id: 3, who: 'Klara Krag', seats: '3/4', typeCar: 'Peugeut 308 black', where: 'København K'},
        {id: 4, who: 'Elisabeth Bøgebjerg', seats: '4/5', typeCar: 'Skoda Fabia silver', where: 'Hillerød'},
        {id: 2, who: 'Carsten Hansen', seats: '2/5', typeCar: 'Toyota Corolla red', where: 'Ballerup'},
        {id: 5, who: 'Mia Rønnelund', seats: '2/4', typeCar: 'Ford Mondeo grey', where: 'Ballerup'},
        {id: 6, who: 'Klara Krag', seats: '3/4', typeCar: 'Peugeut 308 black', where: 'København K'},
        {id: 7, who: 'Elisabeth Bøgebjerg', seats: '4/5', typeCar: 'Skoda Fabia silver', where: 'Hillerød'},
        {id: 8, who: 'Carsten Hansen', seats: '2/5', typeCar: 'Toyota Corolla red', where: 'Ballerup'},
        {id: 9, who: 'Mia Rønnelund', seats: '2/4', typeCar: 'Ford Mondeo grey', where: 'Ballerup'},
    ]

    return(
        <div className="book-cars-container">
            <h1>Book seats</h1>
            <div className="book-cars-table">
                <table className="book-seats-list">
                    <tr className="table-header">
                        <td>Choose number of seats</td>
                        <td>Who</td>
                        <td>Free seats/total seats</td>
                        <td>Type of car</td>
                        <td>Where</td>
                    </tr>

                    {listItems.map(list => (
                        <tr className="table-item" key={list.id}>
                            <td>
                                <input type='number'></input>
                            </td>
                            <td>{list.who}</td>
                            <td>{list.seats}</td>
                            <td>{list.typeCar}</td>
                            <td>{list.where}</td>
                        </tr>
                    ))}
                </table>
            </div>
            
            <div className="book-seats-next-button">
                <NextButton onClick={goNextStep}/>          
            </div>
            
        </div>
    )
}

export default BookCarSeats;