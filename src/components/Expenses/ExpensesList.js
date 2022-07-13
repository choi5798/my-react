import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  // 복잡한 작업(긴 길이의 코드 등)은 return 전에 작성해놓는 것이 더 읽기 편함
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // 리스트 형식의 항목을 다룰 땐 key 속성을 반드시 추가하기
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
