import React, { useState } from "react";
import './SignUp.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Confirm from "./Confirm";
import ExcursionInfo from '../Excursions/ExcursionInfo';
import ExcursionOverview from "../Excursions/ExcursionOverview";
import DutyPriorities from "../smallComponents/DutyPriotities";


function SignUpForm(){
    const [step, setStep] = useState(1);

    const [member, setMember] = useState({
        memberFirstname: "",
        lastname: "",
        address: "",
        email: "",
        phone:"",
        memberAge: "", 
        role: ""
    })

    const [familyMember, setFamilyMember] = useState([{
        familyFirstname: "",
        familyAge: ""
    
    }])

    const goNextStep = () => {
        setStep(step + 1);
    }

    const goBackStep = () => {
        setStep(step - 1);
    }

    const handleMemberChange = memberInput => event =>{
        const {value} = event.target;

        setMember(goBackStep => ({
            ...goBackStep, [memberInput]: value
        }))
    }

    const handleFamilyChange = familyInput => event =>{
        const {value} = event.target;

        setFamilyMember(goBackStep => ({
            ...goBackStep, [familyInput]: value
        }))
    }

    function progressBar(){
        <progress max="4" value={step}/>
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
                    <Step1 goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleMemberChange} memberInput={member}/>
                    
                </div>
            );

        case 4:
            return(
                <div className="container">
                    <Step2 goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleFamilyChange} familyInput={familyMember}/>
                </div>
            );
        case 5:
            return(
                <div className="container"> 
                    <Confirm memberInput={member} familyInput={familyMember} goBackStep={goBackStep}/>
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