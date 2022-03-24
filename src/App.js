import ExpenseItem from "./components/ExpenseItem";

function App() {
  return ( // 커스텀 컴포넌트는 대문자로 시작하는게 국룰!
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem> 
    </div>
  );
}

export default App;
