import React from 'react';


const TodoDate = (props) => {
  let date = new Date(props.date)
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='flex flex-col border-solid border rounded-xl w-20 h-20 bg-gray-900 text-white items-center justify-center'>
      <div className='text-xs font-bold'>{month}</div>
      <div className='text-xs'>{year}</div>
      <div className='text-2xl font-bold'>{day}</div>
    </div>
  );
};

export default TodoDate;
