import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
const CourseInput = ({ todos, setTodos, editTodos, setEditTodos }) => {
  const [priority, setPriority] = useState("low");
  const [inputValue, setInputValue] = useState("");
  const focusRef = useRef();
  const chnageHandler = (e) => {
    setInputValue(e.target.value);
  };
  const updateTodo = (inputValue, id, completed, priority) => {
    const newTodo = todos.map((item) =>
      item.id === id ? { text: inputValue, id, completed, priority } : item
    );

    setTodos(newTodo);
    setEditTodos(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length !== 0) {
      if (!editTodos) {
        setTodos((todos) => {
          const updatedTodo = [...todos];
          updatedTodo.unshift({
            id: Math.floor(Math.random() * 1e17).toString(),
            text: inputValue,
            completed: false,
            priority,
          });
          return updatedTodo;
        });
      } else {
        updateTodo(
          inputValue,
          editTodos.id,
          editTodos.completed,
          editTodos.priority
        );
      }

      setInputValue("");
    }
  };
  useEffect(() => {
    if (editTodos) {
      setInputValue(editTodos.text);
      setPriority(editTodos.priority);
      focusRef.current.focus();
    }
  }, [editTodos, setInputValue]);
  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles["form-control"]}`}>
        <label>To Do List</label>
        <input
          ref={focusRef}
          value={inputValue}
          onChange={chnageHandler}
          type="text"
        />
        <select
          className={`${styles["form-control"]}`}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <Button type="submit">{!editTodos ? "Add" : "Update"}</Button>
    </form>
  );
};

export default CourseInput;
