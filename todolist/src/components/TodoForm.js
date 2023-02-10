import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState('');
    
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        setInput(" ");
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
          {props.edit ? (
            <>
              <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
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
              <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input'
                ref={inputRef}
              />
              <button onClick={handleSubmit} className='todo-button'>
                Add 
              </button>
            </>
          )}
        </form>
      );
    }   

export default TodoForm