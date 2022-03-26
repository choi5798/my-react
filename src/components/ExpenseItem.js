import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // return 에는 오직 하나의 root element만 있어야 한다.
  // 즉 하나의 태그만 존재해야 함
  // 여러 태그를 쓰고 싶으면 그 전체를 하나의 태그로 감싸는 형태로 사용
  // html의 class속성 -> className으로 대체되었다. js에서도 class가 쓰이니깐.
  // html태그의 속성값을 전달 받을 때: props 사용!! (각 컴포넌트의 파라미터는 오직 한 개만 존재해야 함)

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
