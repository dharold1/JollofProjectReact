import React, { useState } from 'react';


const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    props.onSaveTodoData(todoData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredDescription('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='flex flex-wrap mb-4 text-left gap-4'>
        <div className='new-todo__control'>
          <label className='font-bold mb-2 block'>Todo Item</label>
          <input
          required
          className='p-2 rounded-md w-64 max-w-full border-solid border'
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-todo__control'>
          <label className='font-bold mb-2 block'>Description</label>
          <input
            type='text'
             className='p-2 rounded-md w-64 max-w-full border-solid border'
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className='new-todo__control'>
          <label className='font-bold mb-2 block'>Date</label>
          <input
           className='p-2 rounded-md w-64 max-w-full border-solid border'
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='text-right'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
};

export default TodoForm;
