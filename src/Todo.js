import React, { useState } from 'react';
import TodoForm from './component/header/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { Chip } from "@material-ui/core";


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const constructor = () => {
    this.state = {
      currentDateTime: Date().toLocaleString()
    }
  };
  
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }



  return todos.map((todo, index) => (
    
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
      <div class="form-group ">
        <div class="col-md-5">
          <div class="checkbox">
            <input type="checkbox" name="packersOff" id="packers" value="1"/>
            <label for="todos" class="strikethrough"></label>
        </div>
        <Chip label={new Date().getMonth()+1 + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " " + new Date().getHours() + ":" + new Date().getMinutes()} style={{ color: "#3581D8" }} />
      </div>

  
    </div>
    {/*<div class="time"> { this.state.currentDateTime } </div> */}
    </div>
  )
  );
};

export default Todo;