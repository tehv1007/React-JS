import React, { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
