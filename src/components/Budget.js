import React, {useState} from "react";
function Budget(props){

    const [budget, setBudget] = useState(0);
    function handleChange(event){
        const newValue = event.target.value;
        setBudget(newValue);
    }
    return(
        <div className="BRS">
            <div id="budget">
            Budget : 
            <input id="enter-budget" type ="text" placeholder="Enter Your Budget" onChange={handleChange} value={budget}/>
            </div>
            <div id="rem">
                Remaining : {Number(budget) - Number(props.totalExpense)}
            </div>
            <div id="exp">
                Total Expense : {props.totalExpense}
            </div>
        </div>
    )
}
export default Budget;