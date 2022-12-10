import React from 'react';

import TodoItem from './TodoItem';

const TodoList = (props) => {
  if (props.items.length === 0) {
    if (props.loading){
      return  <h3 className='text-white text-center'>Loading Data</h3>
    }
    else{
      return <h2 className='text-white text-center'>Found no expenses.</h2>;
    }
   
  }

  return (
    <ul className='p-0 list-none '>
      {props.loading ? <h3>Loading Data</h3>: props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          description={todo.description}
          date={todo.date}
        />
      ))}
    </ul>
  );
};

export default TodoList;
