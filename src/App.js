import React, { useEffect, useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);
  let content = (
    <p style={{ textAlign: "center" }}>No lists found. Maybe add one?</p>
  );
  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTodos(storedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);
  if (todos.length > 0) {
    content = (
      <CourseGoalList
        todos={todos}
        setTodos={setTodos}
        editTodos={editTodos}
        setEditTodos={setEditTodos}
      />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput
          todos={todos}
          setTodos={setTodos}
          editTodos={editTodos}
          setEditTodos={setEditTodos}
        />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
