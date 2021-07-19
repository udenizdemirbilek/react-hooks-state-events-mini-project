import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const onTaskFormSubmit = (formData) => {
    setTaskList([...taskList, formData])
  }

  const deleteTask = (text) => {
    setTaskList(taskList.filter(e => e.text !== text))
  }
  
  // console.log(taskList)
  const visibleTasks = taskList.filter(e => category === "All" || e.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
