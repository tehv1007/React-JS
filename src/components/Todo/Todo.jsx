import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, onUpdateStatus, onDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          className={styles.editInput}
          type="text"
          value={todo.text}
          onChange={(e) =>
            onUpdateStatus({
              ...todo,
              text: e.target.value,
            })
          }
        />
        <button className={styles.saveBtn} onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.status === "completed" ? <del>{todo.text}</del> : todo.text}
        <button className={styles.editBtn} onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  const handleChange = (e) => {
    let newStatus = e.target.checked ? "completed" : "active";
    onUpdateStatus({ ...todo, status: newStatus });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteTodo(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <span className={styles.text}>{todoContent}</span>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrash />
        </button>
      </span>
    </li>
  );
}

export default Todo;
