import React, { useState ,useEffect } from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import TodoFilter from './Components/TodoFilter';
import './Styles.css';

const App = () => {
  const storedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [filter, setFilter] = useState('all');

   // Save tasks to sessionStorage whenever it is updated
   useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  // Add a new task to the tasks state
  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
  };

  // Delete a task based on its ID
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

   // Toggle the completion status of a task based on its ID
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on the selected filter (all, completed, pending)
  
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1 style={{color:"#646681 "}}>TODO LIST</h1>
      <TodoForm addTask={addTask} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
