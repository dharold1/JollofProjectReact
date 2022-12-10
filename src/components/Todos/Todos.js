import React, { useState } from "react";
import Card from "../UI/Card";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import { orderBy } from "lodash";

const Todos = (props) => {
  const [subSelect, setSubSelect] = useState("asc");
  const [filteredOption, setFilteredOption] = useState("");

  const filterChangeHandler = (selectedOption) => {
    setFilteredOption(selectedOption);
  };
  const orderChangeHandler = (selectedOrder) => {
    setSubSelect(selectedOrder);
  };

  let filteredTodo;
  let items = [];
   props.items.map((todo) => {
        items.push({
          title: todo.todo.title,
          date: new Date(todo.todo.date),
          description: todo.todo.description,
          id: todo.todo.id,
        });
      });

  if (filteredOption === "title") {
    if (subSelect === "asc") {
      filteredTodo = orderBy(items, "title", "asc");
    } else if (subSelect === "desc") {
      filteredTodo = orderBy(items, "title", "desc");
    }
  } else if (filteredOption === "date") {
    if (subSelect === "asc") {
   
      filteredTodo = items.sort(
        (a, b) => Number(a.date) - Number(b.date)
      );
    } else if (subSelect === "desc") {
      filteredTodo = items.sort(
        (a, b) => Number(b.date) - Number(a.date)
      );
    }
  } else {
    filteredTodo = items.sort();
  }

  return (
    <div>
      <Card className="p-2 bg-gray-900 w-3/5 my-8 mx-auto max-w-[95%] expenses">
        <TodoFilter
          selected={filteredOption}
          selectedOrder={subSelect}
          onChangeFilter={filterChangeHandler}
          onChangeOrder={orderChangeHandler}
        />
        <TodoList items={filteredTodo} loading={props.loading} />
      </Card>
    </div>
  );
};

export default Todos;
