import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');


   // Update the task state as the input value changes

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     // Add a new task when the form is submitted

    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
