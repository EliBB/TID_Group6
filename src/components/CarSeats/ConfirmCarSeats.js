import React from "react";
import { useNavigate } from "react-router";
import './ConfirmCarSeats.css';
import BackButton from "../smallComponents/Buttons/BackButton";
import GreenButton from "../smallComponents/Buttons/GreenButton";
import PageHeader from "../smallComponents/PageHeader";

const ConfirmCarSeats = ({goBackStep}) => {

    const navigate = useNavigate;

    const bookedCars =[
        {id: 1, name: "Jens Jensen", address: "Hjortevej 16, 2730 Herlev", email: "Jens.j@gmail.com", 
        number: 25273537, licensePlate: "JW 47 858", color: "grey", type: "Peugeut 307", seats: 3},
        {id: 2, name: "Kristin Petersen", address: "Fagotvej 92, 2730 Herlev", email: "K_Petersen@gmail.com", 
        number: 90914548, licensePlate: "AJ 50 555", color: "green", type: "Volkswagen UP", seats: 1}, 
    ]

    return(
        <div className="confirm-seats-container">
            <PageHeader
            pageTitle="Book seats"/>

            <div className="booked-cars-info">
            {bookedCars.map(car => (
            <div className="one-car-info">
                <div key={car.id}>
                    <h2>Car Owner</h2>
                    <p>Name: {car.name}</p>
                    <p>Address: {car.address}</p>
                    <p>Email: {car.email}</p>
                    <p>Phone: {car.number}</p>
                </div>
                <div>
                    <h2>Car</h2>
                    <p>License plate: {car.licensePlate}</p>
                    <p>Color: {car.color}</p>
                    <p>Type: {car.type}</p>
                    <p>You have booked: {car.seats} seats</p>
                </div>
            </div>
            ))}
            </div>

            <div className="buttons-book-cars">
                <BackButton onClick={goBackStep}/>
                <GreenButton text="Confirm" onClick={navigate("/profile")}/>
            </div>
        </div>
    )
}

export default ConfirmCarSeats;