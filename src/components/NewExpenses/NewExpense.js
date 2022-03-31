import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpenseHandler = (newExpense) => {
    props.onSaveNewExpense(newExpense); // 부모(App)로 올리기!
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
