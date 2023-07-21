import ExpenseItem from "./ExpenseItem";
function ExpenseList(props){
    return(
        <ul className="list">
            {props.expenses.map((expense,index)=>(
                <ExpenseItem 
                    id = {index}
                    key = {index}
                    name = {expense.name}
                    cost = {expense.cost}
                    onRemove ={()=>props.onRemove(index)}  
                    //onRemove ={props.onRemove}
                />
            ))}
        </ul>
    );
};
export default ExpenseList;