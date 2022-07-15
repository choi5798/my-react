import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // useState를 여러개 쓰는것은 자기 맘이지만 어차피 목적(입력 데이터 처리)이 같은 애들은 하나로 묶는게 더 낫다
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, // 나머지 속성이 사라지는 걸 방지하기 위해 그대로 데리고 옴
    //   enteredTitle: event.target.value, // react는 객체를 어쓰기 때문에 속성 하나만 주면 나머지 2개 속성이 사라짐
    // });
    // 위와 같이 쓰면 비동기 때문에 서순 꼬일 우려가 있음
    // // 따라서 아래와 같이 콜백함수로 우선순위 부여
    // setEnteredTitle((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // js의 기본 메소드: server단으로 request시 새로고침 하는 걸 막음

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // 부모(NewExpense)로 올리기!
    //2-way binding (form 사용시 유용): submit으로 값도 넘겨주고(value 속성) 그 후에 값 변경도 함(주로 clear)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>품목</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>비용</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button type="submit">지출 항목 추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
