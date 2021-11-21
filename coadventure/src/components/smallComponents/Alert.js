import React from "react";
import './AlertDelete.css';
import './Alert.css'

function Alert(props){

    return(props.trigger) ? (
        <div className="alert">
            <div className='alert-inner'>
                <p className="header1">Sorry you need to type in all your informations</p>
                <div className="container-btn">
                    <button className="green-btn" onClick={() => props.setTrigger(false)}>
                        Ok
                    </button>
                </div>
                    
            </div>
        </div>
    ) : "";
    
}

export default Alert;