import React from "react";
import OverviewExcursions from "../smallComponents/OverviewExcursions";
import './ExcursionOverview.css'
import PageHeader from "../smallComponents/PageHeader";
import GreenButton from "../smallComponents/Buttons/GreenButton";
import { useNavigate } from "react-router";
import Parse from "parse";
import { useState } from "react";

const ExcursionOverview = ({goNextStep}) => {

    const navigate = useNavigate();

    function createExcursion(){
        navigate("/createExcursion")
    }

    const [queryResult, setQueryResult] = useState([]);

    async function getExcursionData(){
        const query = new Parse.Query('Excursion');
        query.select('name');
        query.select('country');
        query.select('from_date');
        query.select('to_date');

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
        <>
            <PageHeader
                pageTitle="Excursions"
            />

            <GreenButton
            text="Create new Excursion"
            onClick={createExcursion}/>


            <GreenButton onClick={getExcursionData}
            text="Get excursions"/> 


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
            
        </>
        )
    } else {
        
        return(
        <>
            <PageHeader
                pageTitle="Excursions"
            />
        
            <GreenButton onClick={getExcursionData}
            text="Get excursions"/> 
            

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
        </>
        )
    }
}


export default ExcursionOverview;