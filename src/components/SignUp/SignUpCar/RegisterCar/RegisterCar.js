import React from "react";
import "./RegisterCar.css"

//add to input
//onChange={handleData("??")}
//value={input.??}

function RegisterCar(){

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className="register-car-container">
            <h1>Sign Up</h1>

            <div className="ad-car-container">
                <h2>Add car</h2>

                <form className="register-car-form" onSubmit={handleSubmit}>
                    <div className="register-row">
                        <label>
                            <h3>License plate</h3>
                            <input className="input-field"
                            type="text"
                            name="license plate"
                            />
                        </label>
                    </div>

                    <div className="register-row">
                        <label>
                            <h3>Color</h3>
                            <input className="input-field"
                            type="text"
                            name="color"
                            />
                        </label>
                    </div>

                    <div className="register-row">
                        <label>
                            <h3>Car type</h3>
                            <input className="input-field"
                            type="text"
                            name="car type"
                            />
                        </label>
                    </div>

                    <div className="register-row">
                        <label>
                            <h3>Number of free seats</h3>
                            <input className="input-field"
                            type="number"
                            name="free seats"
                            />
                        </label>
                    </div>

                </form>

                
            </div>

            <hr></hr>

            <button className="green-button" >
                Add another car
            </button>

            <div className="register-car-buttons">
                <button className="white-button">
                    Back                    
                </button>
                <button className="green-button">
                    Confirm
                </button>
            </div>

        </div>
    )
}

export default RegisterCar;