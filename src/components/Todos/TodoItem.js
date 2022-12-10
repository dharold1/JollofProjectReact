import React from 'react';

import TodoDate from './TodoDate';
import Card from '../UI/Card';

const TodoItem = (props) => {
  return (
    <li key={props.key}>
      <Card className='flex items-center justify-between mx-0 my-4 p-2 bg-gray-700'>
        <TodoDate date={props.date} />
        <div className='flex flex-col items-start justify-start flex-grow gap-4   sm:items-center sm:justify-start sm:flex-grow'>
          <h2 className='flex-grow text-base my-0 mx-4 text-white sm:text-xl'>{props.title}</h2>
          <div className='flex-grow text-base italic text-sm my-0 mx-4 text-white sm:text-sm'>{props.description}</div>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
