import React from 'react';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <span>Show: </span>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        disabled={filter === 'completed'}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        disabled={filter === 'pending'}
      >
        Pending
      </button>
    </div>
  );
};

export default TodoFilter;
