import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  // 커스텀 컴포넌트는 대문자로 시작하는게 국룰!
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "MacBook M1 PRO",
      amount: 3000000,
      date: new Date(2022, 2, 7),
    },
  ];

  // React.createElement(태그이름, 속성, 내용물)
  // jsx에서 return시 가장 바깥에 태그 하나로 감싸야 했던 이유가 여기서 나옴
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  const saveNewExpenseHandler = newExpense => {

    newExpense = {
      ...newExpense,
      id: Math.random().toString()
    }
    console.log('In App.js');
    console.log(newExpense);
  }

  return (
  
    <div>
      <NewExpense onSaveNewExpense={saveNewExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
