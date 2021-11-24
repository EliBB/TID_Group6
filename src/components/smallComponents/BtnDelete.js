import React from "react";
import { useState } from "react";
import AlertDelete from "./AlertDelete";

function BtnDelete(props){

    const [buttonAlert, setButtonAlert] = useState(false);

    return(
        <div>
            <button className="green-button" onClick={() => setButtonAlert(true)}> 
                {props.actionBtn}
            </button>
            <AlertDelete trigger={buttonAlert} setTrigger={setButtonAlert}></AlertDelete>
        </div>
    )
}

export default BtnDelete;