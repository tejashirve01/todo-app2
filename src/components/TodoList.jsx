import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, onDelete }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <TodoItem key={index} index={index} text={item.text} date={item.date} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
