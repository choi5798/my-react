import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // 실제로 dumb component(state가 없는 멍청이 컴포넌트)가 stateful componenet보다 훨씬 많이 쓰인다
  // 컴포넌트들을 작은 조각들(병사)로 나누고 실제 데이터를 관리하는 것은 몇몇개의 stateful component들이다. (간부)
  const [selectedYear, setSelectedYear] = useState('2021');
  
  const selectFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSelectFilter = {selectFilterHandler}></ExpensesFilter>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[4].title}
        amount={props.expenses[4].amount}
        date={props.expenses[4].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
