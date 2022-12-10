import React, { useState } from 'react';

import TodoForm from './TodoForm';
// import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };
    props.onAddTodo(todoData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    // bg-purple-400 p-4 w-64 text-center rounded-xl my-8 mx-auto max-w-[95%] shadow new-todo
    <div className='new-todo'>
      {!isEditing && (
        // rounded-xl border-solid border py-4 px-8 cursor-pointer bg-indigo-900 text-white mr-4 hover:bg-purple-900 hover:border-purple-900 active:bg-purple-900 active:border-purple-900 
        <button onClick={startEditingHandler}>Add New Todo Item</button>
      )}
      {isEditing && (
        <TodoForm
          onSaveTodoData={saveTodoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
