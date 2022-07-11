import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // 실제로 dumb component(state가 없는 멍청이 컴포넌트)가 stateful componenet보다 훨씬 많이 쓰인다
  // 컴포넌트들을 작은 조각들(병사)로 나누고 실제 데이터를 관리하는 것은 몇몇개의 stateful component들이다. (간부)
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectFilter={filterChangeHandler}
        ></ExpensesFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
