import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // return 에는 오직 하나의 root element만 있어야 한다.
  // 즉 하나의 태그만 존재해야 함
  // 여러 태그를 쓰고 싶으면 그 전체를 하나의 태그로 감싸는 형태로 사용
  // html의 class속성 -> className으로 대체되었다. js에서도 class가 쓰이니깐.
  // html태그의 속성값을 전달 받을 때: props 사용!! (각 컴포넌트의 파라미터는 오직 한 개만 존재해야 함)

  const [title, setTitle] = useState(props.title); // naming convention
  //useState는 항상 2개의 return값을 배열 형태로 가짐. 해당 컴포넌트 직속 산하에 존재 해야함
  //첫번째는 해당 변수의 값, 두번째는 해당 변수를 바꿀 수 있는 함수(중요!!)

  const clickHandler = () => {
    // naming convention of event-listener: 행동(소문자로)+Handler 붙이기
    setTitle("Updated!!"); // 변수에 값을 대입하지 않고(title = 'Updated!!') 함수로 값을 바꾸는 이유: 
    // 이 함수를 부르는 것이 해당 변수에 값을 바로 대입하는 게 아니라, 이 컴포넌트(여기서는 ExpenseItem)를 다시 로딩한다.
    console.log(title); // 변수에 값을 바로 대입하는게 아니라 컴포넌트를 다시 부르기 때문에
    // 직후에 출력을 하면 새 값이 반영 안된 상태라서 결국 예전 값이 나온다(js의 비동기성과 비슷)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
