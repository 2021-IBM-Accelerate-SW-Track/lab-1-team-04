import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from '../../Todo';
import { Typography } from "@material-ui/core";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([todo, ...todos]);
    console.log(...todos);

    const timestamp = new Date();
    console.log(timestamp);
  };

  const updateTodo = (todoId, newValue) => {
    if ((!todos.includes(newValue) && !newValue.text) || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    const timestamp = new Date();
    console.log(timestamp);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    }));
    
  };
  
  return (
    <>
      <Typography variant="h3" align="center" style={{ color: "#0C0B13" }}>To Do List</Typography>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;