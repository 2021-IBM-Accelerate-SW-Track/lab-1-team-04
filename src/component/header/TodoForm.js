import React, { useState, useEffect, useRef } from 'react';
import { v4 } from "uuid";
import { Chip } from  "@material-ui/core";


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });
  
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: v4(),
        text: input 
      });
      setInput('');
    };
  
    return (
      <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={e =>
                setInput(e.target.value)
              }
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input data-testid="new-item-input"
              placeholder='Add to the list :)'
              value={input}
              onChange={e =>
                setInput(e.target.value)
              }
              name='text'
              className='todo-input'
              ref={inputRef}
            />
            <button data-testid="new-item-button" onClick={handleSubmit} className='new-item-button'>
              +
            </button>
          </>
        )}
      </form>
    );
  }
  
export default TodoForm;