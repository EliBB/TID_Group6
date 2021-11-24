import React from "react";
import ExcursionInfo from "./ExcursionInfo";
import './InfoMember.css'

function InfoMember(){
    return(
        <div>
            <ExcursionInfo/>

            <div className="list-container">
                <div className="header1">
                    Shopping list
                </div>

                <div className="header1">
                    Duty List
                </div>
            </div>
            
        </div>
    )
}

export default InfoMember;