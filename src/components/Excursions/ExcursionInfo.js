import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../smallComponents/Buttons/BackButton';
import GreenButton from '../smallComponents/Buttons/GreenButton';
import './ExcursionInfo.css';
import ScrollableTable from '../smallComponents/ScrollableTable';


function ExcursionInfo(){

    const excursionInfo = [
        {
        adults: 40,
        teenagers: 12,
        children: 14,
        }
    ]

    const shoppingList = [
        {id: 1, col1: "Bread", col2: 10, col3: "kg"},
        {id: 2, col1: "Salmon", col2: 5, col3: "kg"},
        {id: 3, col1: "Rice", col2: 8, col3: "kg"},
        {id: 4, col1: "Grill Meat", col2: 10, col3: "kg"},
        {id: 5, col1: "Regular Milk", col2: 10, col3: "Liter"},
        {id: 6, col1: "Bread", col2: 10, col3: "kg"},
        {id: 7, col1: "Salmon", col2: 5, col3: "kg"},
        {id: 8, col1: "Rice", col2: 8, col3: "kg"},
        {id: 9, col1: "Grill Meat", col2: 10, col3: "kg"},
        {id: 10, col1: "Regular Milk", col2: 10, col3: "Liter"},
        {id: 11, col1: "Bread", col2: 10, col3: "kg"},
        {id: 12, col1: "Salmon", col2: 5, col3: "kg"},
        {id: 13, col1: "Rice", col2: 8, col3: "kg"},
        {id: 14, col1: "Grill Meat", col2: 10, col3: "kg"},
        {id: 15, col1: "Regular Milk", col2: 10, col3: "Liter"},
    ]

    const dutyList = [
        {id: 1, col1: "Clean up friday", col2: "Jens", col3: "Peter, Marie"},
        {id: 2, col1: "Shopping", col2: "Jens", col3: "Peter, Marie"},
        {id: 3, col1: "clean up saturday", col2: "Jens", col3: "Peter, Marie"},
        {id: 4, col1: "Accounting", col2: "Jens", col3: "Peter, Marie"},
        {id: 5, col1: "Plan treasure hunt", col2: "Jens", col3: "Peter, Marie"},
        {id: 6, col1: "Treasure hun staff", col2: "Jens", col3: "Peter, Marie"},
        {id: 7, col1: "Cooking friday lunch", col2: "Jens", col3: "Peter, Marie"},
        {id: 8, col1: "Cooking saturday dinner", col2: "Jens", col3: "Peter, Marie"},
        {id: 9, col1: "Dishes friday lunch", col2: "Jens", col3: "Peter, Marie"},
        {id: 10, col1: "Dishes friday dinner", col2: "Jens", col3: "Peter, Marie"},
    ]

    const navigate = useNavigate();

    function goToSignUp(){
        navigate("/SignUpForm")
    }

    function goBack(){
        navigate("/excursionsOverview")
    }

    let params = useParams();

    
    const [excursionData, setExcursionData] = useState({});

    useEffect(() => {
        getExcursionInfo();
    }, []);

    const getExcursionInfo = async () => {
        const fetchExcursion = await fetch(`https://parseapi.back4app.com/classes/Excursion/${params.id}`,
        {
            method: "GET",
                headers:{
                    "X-Parse-Application-Id": "aKa4elDQmoDX7QTNARrGF3MR3JmM5h7uo5jy5uK6",
                    "X-Parse-REST-API-Key": "RzzAU2R0DQmhUA2dentDDnuTTa6lySAFYKsbABs2",
                },
        }
    );
        const excursionItem = await fetchExcursion.json();
        setExcursionData(excursionItem);
        console.log(excursionItem);
    };
    
    return(
        <div className='container'>
            <div className="single-excursion-overview">  
                <div className="single-excursion-row">
                    <p>{excursionData.name}</p>
                    <p>{excursionData.country}</p>
                    <p>{excursionData.from_date} to {excursionData.to_date}</p>
                    
                </div>
              

                <div className="detail-row">
                    <div className="specification-row">
                        <div className="specification-text">
                            <p>Number of people: </p>
                        </div>

                        <div className="specification-items">
                                <h3>Adults: {excursionInfo.adults}</h3>
                                <h3>Teenagers: {excursionInfo.teenagers}</h3>
                                <h3>Children: {excursionInfo.children}</h3>
                        </div>
                    </div>

                    <GreenButton text="Sign up" onClick={goToSignUp}/>
                </div>
                        
                <div>
                <h1>Shopping List</h1>
                
                </div>
                <ScrollableTable 
                listItems={shoppingList}
                headerOne="Item"
                headerTwo="Amount"
                headerThree="Unit"/>

                <h1>Duty List</h1>
                <ScrollableTable 
                listItems={dutyList}
                headerOne="Duty"
                headerTwo="Boss"
                headerThree="Manning"/>

                <BackButton onClick={goBack}/>
            </div> 
        </div>
    )
}

export default ExcursionInfo;