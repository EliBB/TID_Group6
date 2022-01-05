
import "./DutyPriorityForm.css"

function DutyPriorityForm(){
    return(
        <div className="duty-input-row">
            <h2>1. Priority</h2>
            <label> 
                <input className="duty-input-field"
                type="text"
                
                />
            </label> 

            <h2>2. Priority</h2>
            <label> 
                <input className="duty-input-field"
                type="text"
                
                />
            </label> 

            <h2>3. Priority</h2>
            <label> 
                <input className="duty-input-field"
                type="text"
                
                />
            </label>  

        </div>
    )
}

export default DutyPriorityForm;