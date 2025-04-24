import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [items, setItems] = useState([]);

  const addItem = (text, date) => {
    if (text.trim() !== '') {
      setItems([...items, { text, date }]);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Todo App</h2>
          <TodoInput onAdd={addItem} />
          <TodoList items={items} onDelete={deleteItem} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
