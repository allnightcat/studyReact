import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((item) => (
        <TodoListItem
          todo={item}
          key={item.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
