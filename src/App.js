import React, { useState, useEffect } from "react";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import { db } from "./firebase";
import {uid} from "uid";
import { set, ref, onValue } from "firebase/database";
// import { dataref } from "./firebase";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onValue(ref(db),  (snapshot) => {
      setTodos([])
      const data =  snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
          setIsLoading(false);
        });
      }else {
        setIsLoading(false)
      }
    });
  }, []);

  const addTodoHandler = (todo) => {
    const uuid = uid();    set(ref(db, `/${uuid}`),{
      todo,
      uuid
    })
    
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} loading={isLoading}  />
    </div>
  );
};

export default App;
