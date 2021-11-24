import React from "react";
import { Link } from "react-router-dom";
import './AlertDelete.css'

function AlertDelete(props){

    return(props.trigger) ? (
        <div className="alert">
            <div className='alert-inner'>
                <p className="header1">Are you sure you want to delete?</p>

                <div className="container-btns">
                    <button className="green-btn" onClick={() => props.setTrigger(false)}>
                        Cancel
                    </button>

                    <button className="red-btn">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    ) : "";
    
}

export default AlertDelete;