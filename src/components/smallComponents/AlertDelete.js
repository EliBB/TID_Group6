import React from "react";
import './AlertDelete.css'

function AlertDelete(props){

    return(props.trigger) ? (
        <div className="alert">
            <div className='alert-inner'>
                <h1>Are you sure you want to delete?</h1>

                <div className="container-btns">
                    <button className="green-button" onClick={() => props.setTrigger(false)}>
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