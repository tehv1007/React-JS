import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

function TodoList(filterStatus) {
  const defaultValue = [
    { id: 0, text: "Drink Coffee", status: "active" },
    { id: 1, text: "Eat chicken", status: "active" },
    { id: 2, text: "Watch Netflix", status: "active" },
  ];
  const [todos, setTodo] = useState(() => {
    const data = window.localStorage.getItem("todoList");
    return data !== null ? JSON.parse(data) : defaultValue;
  });

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    /* Make an unique and simple ID and assign to todo object*/
    // let lastId =
    //   todos.length === 0
    //     ? 0
    //     : Math.max.apply(
    //         null,
    //         todos?.map((item) => item.id)
    //       );

    // let newId = lastId + 1;
    // Object.assign(todo, { id: newId });

    setTodo([...todos, todo]); // Spread syntax
  }; // receive data from child component (AddTodo)

  const handleUpdate = (updateTodo) => {
    setTodo(
      todos.map((curTodo) => {
        if (curTodo.id === updateTodo.id) {
          return updateTodo;
        } else return curTodo;
      })
    );
  };

  const handleDelete = (todo) => {
    setTodo((todos) => todos.filter((item) => item.id !== todo.id));
  };

  console.log(filterStatus);
  const filteredTodos = getFilteredTodos(todos, filterStatus);
  function getFilteredTodos(todos, filterStatus) {
    if (filterStatus.filter === "active") {
      return todos.filter((todo) => todo.status === "active");
    } else if (filterStatus.filter === "completed") {
      return todos.filter((todo) => todo.status === "completed");
    } else return todos;
  }

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdateStatus={handleUpdate}
            onDeleteTodo={handleDelete}
          />
        ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

export default TodoList;
