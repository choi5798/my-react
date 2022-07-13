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

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // 리스트 형식의 항목을 다룰 땐 key 속성을 반드시 추가하기
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  // 복잡한 작업(긴 길이의 코드 등)은 return 전에 작성해놓는 것이 더 읽기 편함

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectFilter={filterChangeHandler}
        ></ExpensesFilter>
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
        {/*js 의 트릭 : && 앞의 조건이 만족하면 뒤에 있는 값을 return 한다 => abusing */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
