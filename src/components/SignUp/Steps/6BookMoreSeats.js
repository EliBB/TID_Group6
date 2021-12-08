import React from "react";
import '../SignUp.css';
import Parse from "parse";
import InputForm from "../InputForm";
import BackButton from "../../smallComponents/Buttons/BackButton";
import NextButton from "../../smallComponents/Buttons/NextButton";
import PageHeader from "../../smallComponents/PageHeader";

function BookMoreSeats({
    goNextStep,
    goBackStep,
    handleData, 
    seatInput
}){


    async function bookCarSeats(){
        const carSeats = Parse.Object.extend("NeededCarSeats")

        const neededSeats = new carSeats();
        neededSeats.set("numberOfSeats", seatInput.numberOfSeats);

        try{
            let result = await neededSeats.save()
            console.log("Needed seats added: " + result.id)
            goNextStep();
        } catch (error) {
            alert ("Error " + error.message)
        }
    }
    
    function handleSubmit(event){
        event.preventDefault();
    } 

    return(
        <div className="info-box-container">
            <PageHeader
            pageTitle="Book extra car seats"
            />
            
            <form onSubmit={handleSubmit}>
                <div className="info-box">
                    <InputForm
                        title="How many seats do you need?"
                        type="number"
                        name="neededSeats"
                        value={seatInput.neededSeats}
                        onChange={handleData("neededSeats")}           
                    />
                    
                </div>

                <div className="button-row">
                    <BackButton onClick={goBackStep}/>
                    <NextButton onClick={bookCarSeats}/>
                </div>
            </form>



        </div>
        
    )
}

export default BookMoreSeats;