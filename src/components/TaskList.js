import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (taskText) => {
    const updatedTasks = taskList.filter((task) => task.text !== taskText);
    setTaskList(updatedTasks);
  };

  return (
    <div className="tasks">
      {taskList.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
