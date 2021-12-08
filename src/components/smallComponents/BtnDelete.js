import React from "react";
import { useState } from "react";
import AlertDelete from "./AlertDelete";

function BtnDelete(){

    const [buttonAlert, setButtonAlert] = useState(false);

    return(
        <div>
            <button className="green-button" onClick={() => setButtonAlert(true)}> 
                <p>Delete</p>
            </button>
            <AlertDelete trigger={buttonAlert} setTrigger={setButtonAlert}></AlertDelete>
        </div>
    )
}

export default BtnDelete;