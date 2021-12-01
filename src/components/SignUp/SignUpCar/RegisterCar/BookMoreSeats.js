import React from "react";
import "../NoCar/NoCar.css";
import BtnLink from "../../components/smallComponents/BtnLink";

function BookMoreSeats(){
    return(
        <div className="no-car-container">
            <h1>Sign Up</h1>

            <div className = "trans-container">
                <div className="trans-paragraph">
                    <form>
                        <label>
                            <h3>How many seats do you need?</h3>
                            <input className="input-field"
                            type="number"
                            name="number car seats"
                            />
                        </label>
                    </form>
                </div>

                <div className = "button-container">
                    <BtnLink actionBtn="Back" link="/"></BtnLink>

                    <BtnLink actionBtn="Next" link="/"></BtnLink>
                </div>
            </div>
        </div>
    )
}

export default BookMoreSeats;