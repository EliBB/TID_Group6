import React, { useState } from "react";
import './SignUp.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Confirm from "./Confirm";
import ExcursionInfo from '../Excursions/ExcursionInfo';
import ExcursionOverview from "../Excursions/ExcursionOverview";


function SignUpForm(){
    const [step, setStep] = useState(1);

    const [member, setMember] = useState({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
        phone:"",
        age: "", 
        role: ""
    })

    const [familyMember, setFamilyMember] = useState([{
        name: "",
        age: ""
    
    }])

    const goNextStep = () => {
        setStep(step + 1);
    }

    const goBackStep = () => {
        setStep(step - 1);
    }

    const handleChange = input => event =>{
        const {value} = event.target;

        setMember(goBackStep => ({
            ...goBackStep, [input]: value
        }))
    }

    switch (step){
        case 1:
            return(
                <div className="container">
                    <ExcursionOverview goNextStep={goNextStep}/>
                    
                </div>
            );
        case 2:
            return(
                <div className="container">
                    <ExcursionInfo goNextStep={goNextStep} goBackStep={goBackStep}/>
                    
                </div>
            );
        case 3:
            return(
                <div className="container">
                    <Step1 goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleChange} input={member}/>
                    
                </div>
            );

        case 4:
            return(
                <div className="container">
                    <Step2 goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleChange} input={member}/>
                </div>
            );
        case 5:
            return(
                <div className="container"> 
                    <Confirm input={member} goBackStep={goBackStep}/>
                </div>
            )
        default:
            return(
                <div className="container">
                    <ExcursionOverview/>
                </div>
            )
    }

    
}

export default SignUpForm;