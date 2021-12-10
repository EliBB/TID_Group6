import React, { useState }  from "react";
import BookCarSeats from "./BookCarSeats";
import ConfirmCarSeats from "./ConfirmCarSeats";
import Profile from "../MenuBar/Profile"

function BookCarsForm(){

    const [step, setStep] = useState(1);

    const goNextStep = () => {
        setStep(step + 1);
    }

    const goBackStep = () => {
        setStep(step -1);
    }
    
    switch (step){
        case 1:
            return(
                <BookCarSeats goNextStep={goNextStep}></BookCarSeats>
            );
        case 2:
            return(
                <ConfirmCarSeats goNextStep={goNextStep} goBackStep={goBackStep}></ConfirmCarSeats>
            );
        default:
            return(
                <Profile></Profile>
            );
    }
}

export default BookCarsForm;