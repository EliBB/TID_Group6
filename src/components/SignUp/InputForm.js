import React from "react";

function InputForm({}){
    return(
        <div className="placeholder">
            <div className="header-row">
                <h1>{headerTitle}</h1>
            </div>

            <form className="signUp-form" onSubmit={handleSubmit}> 
                <div className="signUp-row">
                    <label> 
                        <h3>{title}</h3>
                            <input className="input-field"
                            type={type} 
                            name={inputName}
                            value={value}
                            onChange={onChange}
                            />
                    </label>  
                </div>
            </form>
        </div>
    )
}

export default InputForm;