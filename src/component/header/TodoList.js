import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from '../../Todo';
import { Typography } from "@material-ui/core";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if  ((!todo.text || /^\s*$/.test(todo.text)) && !todos.some(x => x.text === todo.text))  {
      return;
    }
    {/*var y = findDuplicates([todo, ...todos]); */}
    setTodos([todo, ...todos]);
    console.log(...todos);
  };

  const findDuplicates = arr => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr.length() == 1 || sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }

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
      <Typography variant="h3" align="center" style={{ color: "#FFFFFF" }}>To Do List</Typography>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;