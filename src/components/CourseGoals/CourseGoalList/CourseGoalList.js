import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = ({ todos, setTodos, editTodos, setEditTodos }) => {
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const checkHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        }
        return item;
      })
    );
  };
  const editHandler = (id) => {
    const findTodo = todos.find((item) => item.id === id);
    setEditTodos(findTodo);
    console.log(findTodo);
  };
  return (
    <ul className="goal-list">
      {todos.map((todo) => (
        <CourseGoalItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          deleteHandler={deleteHandler}
          checkHandler={checkHandler}
          completed={todo.completed}
          editHandler={editHandler}
        />
      ))}
    </ul>
  );
};

export default CourseGoalList;
