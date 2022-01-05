import React, { useEffect } from "react";
import OverviewExcursions from "../smallComponents/OverviewExcursions";
import './ExcursionOverview.css'
import PageHeader from "../smallComponents/PageHeader";
import GreenButton from "../smallComponents/Buttons/GreenButton";
import { useNavigate } from "react-router";
import Parse from "parse";
import { useState } from "react";
import { Link } from "react-router-dom";

const ExcursionOverview = ({goNextStep}) => {

    const navigate = useNavigate();

    function createExcursion(){
        navigate("/createExcursion")
    }

    const [queryResult, setQueryResult] = useState([]);

    useEffect(() => {
        excursionItems();
    }, []);

    const excursionItems = async () =>{
        const query = new Parse.Query('Excursion');
        query.select('name');
        query.select('country');
        query.select('from_date');
        query.select('to_date');
        query.select('ObejctId');

        try{
            let excursions = await query.find();
            setQueryResult(excursions);
            
        } catch (error){
            alert('Error: ' + error.message)
        }
    };

    const user = Parse.User.current();
    const role = user.get("role")


    if(role === "Organizer"){
        return(
        <div className="container">
            <PageHeader
                pageTitle="Excursions"
            />
            <br/>
            <button className="create-excursion-button" onClick={createExcursion}>
                <p>Create new excursion </p>
            </button>

            <br/>

            <div className="all-excursions">
                {queryResult.map((excursion) => (
                    <div className="one-excursion" key={excursion.get('ObjectId')}>
                        <OverviewExcursions 
                            key={excursion.get('ObjectId')}
                            type={excursion.get('name')}  
                            where={excursion.get('country')}
                            fromDate={excursion.get('from_date')}
                            toDate={excursion.get('to_date')}
                            actionBtn="Get Info">
                        </OverviewExcursions>

                        <div className="button-getinfo">
                            <Link to={`/excursionsOverview/${excursion.id}`}>
                                <GreenButton text="Get info"/>
                            </Link>
                        </div>
                        
                    </div>
                ))}
            </div> 
        </div>
        )
    } else {
        
        return(
        <div className="container">
            <PageHeader
                pageTitle="Excursions"
            />          

            <div className="all-excursions">
                {queryResult.map((excursion) => (
                    <div className="one-excursion" >
                        <OverviewExcursions 
                            key={excursion.get('ObjectId')}
                            type={excursion.get('name')}  
                            where={excursion.get('country')}
                            fromDate={excursion.get('from_date')}
                            toDate={excursion.get('to_date')}
                            actionBtn="Get Info">
                        </OverviewExcursions>

                        <div className="button-getinfo">
                            <GreenButton text="Get info" onClick={goNextStep}/>
                        </div>
                        
                    </div>
                ))}
            </div>        
        </div>
        )
    }
}


export default ExcursionOverview;