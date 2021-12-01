import React, { useState } from "react";
import './SignUp.css';
import AddMember from './1AddMember';
import AddFamily from './2AddFamily';
import Confirm from "./Confirm";
import ExcursionInfo from '../Excursions/ExcursionInfo';
import ExcursionOverview from "../Excursions/ExcursionOverview";



function SignUpForm(){
    const [step, setStep] = useState(1);

    const [member, setMember] = useState({
        memberFirstname: "",
        lastname: "",
        address: "",
        email: "",
        phone:"",
        memberAge: "", 
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
                    <AddMember goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleMemberChange} memberInput={member}/>
                    
                </div>
            );

        case 4:
            return(
                <div className="container">
                    <AddFamily goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleFamilyChange} familyInput={familyMember} setFamilyInput={setFamilyMember}/>
                </div>
            );



        case 5:
            return(
                <div className="container">
                    
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


{/* <div className="container"> 
                    <Confirm memberInput={member} familyInput={familyMember} goBackStep={goBackStep}/>
                </div> */}