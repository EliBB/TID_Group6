import React from "react";
import Parse from "parse";
import { useState } from "react";
import { useNavigate } from "react-router";
import InputForm from "../SignUp/InputForm";
import PageHeader from "../smallComponents/PageHeader";
import BackButton from "../smallComponents/Buttons/BackButton";
import GreenButton from "../smallComponents/Buttons/NextButton";
import "../SignUp/SignUp.css"

function CreateExcursion(){
    const [name, setName] = useState("")
    const [place, setPlace] = useState("");
    const [country, setCountry] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [deadlineDate, setDeadlineDate] = useState("");

    const navigate = useNavigate();


    function handleNameChange (event) {
        setName(event.target.value);
    }
    
    function handlePlaceChange (event) {
        setPlace(event.target.value);
    }

    function handleCountryChange (event) {
        setCountry(event.target.value);
    }

    function handleFromDate (event) {
        setFromDate(event.target.value);
    }

    function handleToDate (event) {
        setToDate(event.target.value);
    }

    function handleDeadlineDate (event) {
        setDeadlineDate(event.target.value);
    }

    async function saveNewExcursion(event){
        event.preventDefault();

        const createExcursion = Parse.Object.extend("Excursion");
        const newExcursion = new createExcursion();
        newExcursion.set("name", name);
        newExcursion.set("place", place);
        newExcursion.set("country", country);
        newExcursion.set("from_date", fromDate);
        newExcursion.set("to_date", toDate);
        newExcursion.set("deadline_date", deadlineDate);

        try{
            let result = await newExcursion.save()
            console.log(result)
            alert("Excursion registred")
            navigate("/excursions")
        } catch (error){
            alert("Error: " + error.message)
        }
    }

    function goBack(){
        navigate("/excursions");

    }

    return(
        <div className="container">
        <PageHeader pageTitle="Create Excursion"/>
        <form className="input-form">
            <InputForm
            title="Name of excursion"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            />

            <InputForm
            title="Place"
            type="text"
            name="place"
            value={place}
            onChange={handlePlaceChange}
            />

            <InputForm
            title="Country"
            type="text"
            name="country"
            value={country}
            onChange={handleCountryChange}
            />

            <InputForm
            title="Date from:"
            type="date"
            name="fromDate"
            value={fromDate}
            onChange={handleFromDate}
            />

            <InputForm
            title="Date to:"
            type="date"
            name="toDate"
            value={toDate}
            onChange={handleToDate}
            />

            <InputForm
            title="Sign up deadline"
            type="date"
            name="deadlineDate"
            value={deadlineDate}
            onChange={handleDeadlineDate}
            />

            
            <div className="button-row">
                <BackButton onClick={goBack}/>
                <GreenButton text="Create" onClick={saveNewExcursion}/>          
            </div>  
        </form>
        
        </div>
    )
}

export default CreateExcursion;