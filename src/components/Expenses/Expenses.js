import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // 실제로 dumb component(state가 없는 멍청이 컴포넌트)가 stateful componenet보다 훨씬 많이 쓰인다
  // 컴포넌트들을 작은 조각들(병사)로 나누고 실제 데이터를 관리하는 것은 몇몇개의 stateful component들이다. (간부)
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectFilter={filterChangeHandler}
        ></ExpensesFilter>
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
        {/*js 의 트릭 : && 앞의 조건이 만족하면 뒤에 있는 값을 return 한다 => abusing */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;
