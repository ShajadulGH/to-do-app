import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
const CourseInput = ({ todos, setTodos, editTodos, setEditTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const focusRef = useRef();
  const chnageHandler = (e) => {
    setInputValue(e.target.value);
  };
  const updateTodo = (inputValue, id, completed) => {
    const newTodo = todos.map((item) =>
      item.id === id ? { text: inputValue, id, completed } : item
    );
    setTodos(newTodo);
    setEditTodos(null);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.length !== 0) {
      if (!editTodos) {
        setTodos((todos) => {
          const updatedTodo = [...todos];
          updatedTodo.unshift({
            id: Math.floor(Math.random() * 1e17).toString(),
            text: inputValue,
            completed: false,
          });
          return updatedTodo;
        });
      } else {
        updateTodo(inputValue, editTodos.id, editTodos.completed);
      }

      setInputValue("");
    }
  };
  useEffect(() => {
    if (editTodos) {
      setInputValue(editTodos.text);
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
      </div>
      <Button type="submit">{!editTodos ? "Add" : "Update"}</Button>
    </form>
  );
};

export default CourseInput;
