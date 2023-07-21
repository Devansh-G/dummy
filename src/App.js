import React from "react";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  
  const [expenses, setExpenses] = useState([]);
  const [spent, setSpent] = useState(0);

  function onAdd(item){
    setSpent(prevValue =>{
      return Number(prevValue) + Number(item.cost);
    })
    setExpenses(prevValue =>{ 
      return(
        [...prevValue, item]
      )
    });
  }

  function onRemove(id){
    setExpenses(prevValue =>{
      return prevValue.filter((item,index) => {
        if(id===index)
          setSpent(prevValue =>{
            return (Number(prevValue) - Number(item.cost)/2);
          })
        return id!==index;
      });
    });
  }

  return(
    <div className = 'main-class'>
      <h1 className="heading"> My Budget Planner</h1>
      <div>
        <Budget totalExpense = {spent} />
      </div>
      <div className="Expenselist">
      <h3> Expenses</h3>
      {/* <h3>Add Expense</h3> */}
      <AddExpenseForm onAdd ={onAdd}/>
      <ExpenseList expenses={expenses} addExpenses={setExpenses} onRemove={onRemove} />
      </div>
    </div>
  )
}
export default App;