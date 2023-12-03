import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Todo from './TodoList';


const TodoItem = ({ task, deleteTask, toggleTaskCompletion, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await updateTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
            autoFocus
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}

      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button onClick={handleEditToggle}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </li>
  );
};

export default TodoItem;
