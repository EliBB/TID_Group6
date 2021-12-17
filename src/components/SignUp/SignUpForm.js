import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import ExcursionOverview from "../Excursions/ExcursionOverview";
import AddMember from './Steps/1AddMember';
import AddFamily from './Steps/2AddFamily';
import SignUpCar from "./Steps/3SignUpCar";
import RegisterCar from "./Steps/4RegisterCar"
import MoreSeats from "./Steps/5MoreSeats";
import BookMoreSeats from "./Steps/6BookMoreSeats"
import Confirm from "./Steps/7Confirm";

function SignUpForm(){
    const navigate = useNavigate();

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

    const [car, setCar] = useState({
        licensePlate: "",
        color: "",
        carType: "",
        numberOfFreeSeats: ""
    })

    const [neededSeats, setNeededSeats] = useState({
        neededSeats: ""
    })

    const goNextStep = () => {
        setStep(step + 1);
    }

    const goBackStep = () => {
        setStep(step - 1);
    }

    const skipStep = () => {
        setStep(step + 2);
    }

    const confirm = () => {
        navigate("/profile");
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

    const handleCarChange = carInput => event =>{
        const {value} = event.target;

        setCar(goBackStep => ({
            ...goBackStep, [carInput]: value
        }))
    }

    const handleSeatChange = seatInput => event =>{
        const {value} = event.target;

        setNeededSeats(goBackStep => ({
            ...goBackStep, [seatInput]: value
        }))
    }

    switch (step){
        case 1:
            return(
                <AddMember goNextStep={goNextStep} handleData={handleMemberChange} memberInput={member}/>
            );

        case 2:
            return(
                <AddFamily goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleFamilyChange} familyInput={familyMember} setFamilyInput={setFamilyMember}/>
            );

        case 3:
            return(
                <SignUpCar goNextStep={goNextStep} skipStep={skipStep} goBackStep={goBackStep}/>
            );

        case 4:
            return(
                <RegisterCar goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleCarChange} carInput={car}/>
            );

        case 5:
            return(
                <MoreSeats goNextStep={goNextStep} skipStep={skipStep} goBackStep={goBackStep}/>
            );

        case 6:
            return(
                <BookMoreSeats goNextStep={goNextStep} goBackStep={goBackStep} handleData={handleSeatChange} seatInput={neededSeats}/>
            );

        case 7:
            return(
                <Confirm memberInput={member} familyInput={familyMember} carInput={car} seatInput={neededSeats} goBackStep={goBackStep} confirm={confirm}/>
            );

        default:
            return(
                <ExcursionOverview/>
            );
    };
};

export default SignUpForm;

