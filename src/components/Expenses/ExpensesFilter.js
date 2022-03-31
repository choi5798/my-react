import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterHandler = (event) => {
    props.onSelectFilter(event.target.value); // 부모로 보내기
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHandler} value={props.selected}> {/* 2-way binding */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;