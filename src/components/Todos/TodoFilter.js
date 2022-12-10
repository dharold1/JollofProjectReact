import React from 'react';


const TodoFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const orderChangeHandler = (event) => {
    props.onChangeOrder(event.target.value)
  }

  return (
    <div className='py-0 px-4 text-black'>
      <div className='flex items-center justify-between mx-0 my-4 w-full'>
        {/* <label className='font-bold mb-2'>Filter</label> <br /> */}
        <select className='rounded-md py-2 px-12 font-bold sm:' value={props.selected} onChange={dropdownChangeHandler}>
        <option value=''></option>
          <option value='date'>By date</option>
          <option value='title'>By title</option>
        </select>
        <select className='rounded-md py-2 px-12 font-bold' value={props.selectedOrder} onChange={orderChangeHandler}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
