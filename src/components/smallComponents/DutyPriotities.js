/* import React, { useState } from "react";

const duties = [
    'Make Breakfirst',
    'Cleaning',
    'Make dinner',
    'Grocery shopping'
]

const [duty, setDuty] = useState([]);

const handleChange = (event) => {
    const {options} = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < 1; i +=1 ){
        if (options[i].selected){
            value.push(options[i].value);
        }
    }
    setDuty(value);
}


function DutyPriorities(){
    return(
        <div>
            <select
            value={duty}
            onChange={handleChange}
            >
                {duties.map((duty => (
                    <option key={duty} value={duty}>
                        {duty}
                    </option>
                )))}
            </select>
        </div>
    )
}

export default DutyPriorities; */