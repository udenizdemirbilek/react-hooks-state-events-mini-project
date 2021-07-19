import React from "react";
import Task from "./Task"

function TaskList({tasks, deleteTask}) {
  // console.log(tasks)
  

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, i)  => <Task key={i} text={task.text} category={task.category} deleteTask={deleteTask}/>) }
    </div>
  );
}

export default TaskList;
