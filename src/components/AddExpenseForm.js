import React, { useState } from "react";

function AddExpenseForm(props)
{
    const [item, updateItem] = useState({
        name : "",
        cost : ""
    });
    function handleChange(event){
        const {id, value} = event.target;
        
        updateItem(prevValue =>{
            return {
                ...prevValue,
                [id] : value
            };
        });
    }

    function handleClick(event)
    {
        if(item.name!=="" || item.name!==""){
            props.onAdd(item);
        }
        event.preventDefault();
        updateItem({
            name:"",
            cost:""
        });
    }
    return(
        <div>
        <form autoComplete="off">
            <input type='text' id='name' onChange = {handleChange} value ={item.name} placeholder="Add item"/>
            <input type="text"  id="cost" onChange = {handleChange} value ={item.cost} placeholder="Add cost"/>
            {/* <button onClick={()=>{
                props.onAdd(item);
            }}> Save</button> */}
            <button onClick={handleClick}> <i class="fa-solid fa-plus"></i></button>
        </form>
        </div>
    )
}
export default AddExpenseForm;