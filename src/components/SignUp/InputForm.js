import React from "react";

function InputForm({title, type, value, onChange}){
    return(
        <div className="input-row">
            <h2>{title}</h2>
            <label> 
                <input className="input-field"
                type={type}
                value={value}
                onChange={onChange}
                />
            </label>  

        </div>
    )
}

export default InputForm;