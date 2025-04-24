import React from 'react';

const TodoItem = ({ text, date, index, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2">
      <div>
        <strong>{text}</strong>
        {date && <div className="text-muted small">📅 {date}</div>}
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(index)}>
        Delete
      </button>
    </li> 
  );
};

export default TodoItem;
