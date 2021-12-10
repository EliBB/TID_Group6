import React from "react";
import Parse from "parse";
import '../SignUp.css';
import InputForm from "../InputForm";
import PageHeader from "../../smallComponents/PageHeader";
import BtnDelete from "../../smallComponents/BtnDelete";
import BackButton from "../../smallComponents/Buttons/BackButton";
import NextButton from "../../smallComponents/Buttons/NextButton";
import GreenButton from "../../smallComponents/Buttons/GreenButton";

function RegisterCar({
    goNextStep,
    goBackStep,
    handleData,
    carInput
}){

    async function addCar(){
        const car = Parse.Object.extend("Car");
        const memberRelation = Parse.User.current();
        
        const newCar = new car();
        newCar.set("licenseplate", carInput.licensePlate);
        newCar.set("color", carInput.color)
        newCar.set("cartype", carInput.carType)
        newCar.set("numberoffreeseats", carInput.numberOfFreeSeats)
        newCar.set("memberRelation", memberRelation);

        try{
            let result = await newCar.save();
            console.log("New car added " + result.id)
            goNextStep();
        } catch (error) {
            alert ("Error " + error.message)
        };
    }   

    function handleSubmit(event){
        event.preventDefault();
    }

    function addNewCar(){
        
    }

    function deleteCar(){

    }

    return(
        <>
        <PageHeader
                pageTitle="Add car"
            />
        <div className="placeholder">
            
            <form className="input-form" onSubmit={handleSubmit}>
                <InputForm
                    title="License plate"
                    type="text"
                    name="licensePlate"
                    value={carInput.licensePlate}
                    onChange={handleData("licensePlate")}
                />
                
                <InputForm
                    title="Color"
                    type="text"
                    name="color"
                    value={carInput.color}
                    onChange={handleData("color")}
                />   

                <InputForm
                    title="Car type"
                    type="text"
                    name="carType"
                    value={carInput.carType}
                    onChange={handleData("carType")}
                />

                <InputForm
                    title="Number of free seats"
                    type="number"
                    name="numberOfFreeSeats"
                    value={carInput.numberOfFreeSeats}
                    onChange={handleData("numberOfFreeSeats")}
                />

                <hr></hr>

                <div className="add-button">
                    <GreenButton text="Add another car" onClick={addNewCar}/>

                    <BtnDelete onClick={deleteCar}/>
                </div>

                <div className="button-row">
                    <BackButton onClick={goBackStep}/>
                    <NextButton onClick={addCar}/>
                </div>
            </form> 
        </div>
        </>
    )
}

export default RegisterCar;