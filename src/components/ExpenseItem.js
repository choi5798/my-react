function ExpenseItem() {
  // return 에는 오직 하나의 root element만 있어야 한다.
  // 즉 하나의 태그만 존재해야 함
  // 여러 태그를 쓰고 싶으면 그 전체를 감싸는 하나의 태그가 필요함
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
