import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn hành động mặc định của trình duyệt khi có event là reload lại page
    if (text.trim().length > 0)
      onAdd({ id: uuidv4(), text: text, status: "active" }); // send data to parent component (Todolist)
    setText("");
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add Todo"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
