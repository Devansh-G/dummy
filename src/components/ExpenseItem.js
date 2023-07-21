import React from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
function ExpenseItem(props){
    return(
        <li id="items">
            <div id="item-name">{props.name}</div>
            <span id="price">₹ {props.cost} </span>
            <RiDeleteBin6Line id="del" onClick={()=>props.onRemove(props.id)} size='1.5em' style={{marginLeft:"40px" , marginRight:"20px", padding:"1px" , marginTop:"2px"}}/>
        </li>
    );
};
export default ExpenseItem;