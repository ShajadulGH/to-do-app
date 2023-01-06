import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);
  let content = (
    <p style={{ textAlign: "center" }}>No lists found. Maybe add one?</p>
  );

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
