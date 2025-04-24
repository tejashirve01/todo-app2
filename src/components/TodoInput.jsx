import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = () => {
    onAdd(input, date);
    setInput('');
    setDate('');
  };

  return (
    <div className="mb-3">
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Todo Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
