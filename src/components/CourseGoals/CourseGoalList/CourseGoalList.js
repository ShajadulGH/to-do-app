import React, { useState } from "react";

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
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const editHandler = (id) => {
    const findTodo = todos.find((item) => item.id === id);
    setEditTodos(findTodo);
  };
  const [filterPriority, setFilterPriority] = useState("all");
  const filteredTasks = todos.filter((task) =>
    filterPriority === "all" ? true : task.priority === filterPriority
  );
  return (
    <>
      <form>
        <div className={["form-control"]}>
          <label className={["form-control"]}>Filter by Priority:</label>
          <select
            className={["form-control"]}
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </form>
      <ul className="goal-list">
        {filteredTasks.map((todo) => (
          <CourseGoalItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            deleteHandler={deleteHandler}
            checkHandler={checkHandler}
            completed={todo.completed}
            editHandler={editHandler}
            priority={todo.priority}
          />
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
