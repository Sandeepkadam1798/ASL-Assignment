import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask, toggleTaskCompletion, updateTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTask={updateTask}  
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
