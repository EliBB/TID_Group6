import React from "react";
import '../SignUp.css';
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

    const dataSeats = seatInput.numberOfSeats;

    async function bookCarSeats(){
        try{
            const response = await fetch ("https://parseapi.back4app.com/classes/NeededCarSeats",
            {
                method: "POST",
                headers:{
                    "X-Parse-Application-Id": "aKa4elDQmoDX7QTNARrGF3MR3JmM5h7uo5jy5uK6",
                    "X-Parse-REST-API-Key": "RzzAU2R0DQmhUA2dentDDnuTTa6lySAFYKsbABs2",
                },
                body: JSON.stringify(dataSeats),
            });

            if(!response.ok){
                const message = "Error: " + response.status;
                throw new Error(message);
            }
            goNextStep();
            const data = await response.json();
            console.log(data);
        } catch (error){
            alert("Error: " + error)
        }
    }
    
    function handleSubmit(event){
        event.preventDefault();
    } 

    return(
        <div className="container">
            <PageHeader
                pageTitle="Book extra car seats"
                />
            <div className="info-box-container">
                
                
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
        </div>
    )
}

export default BookMoreSeats;