import Expenses from "./components/Expenses";

function App() {
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

  return (
    // 커스텀 컴포넌트는 대문자로 시작하는게 국룰!
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>

    </div>
  );
}

export default App;
