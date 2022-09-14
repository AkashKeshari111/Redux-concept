import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DELETE, markCompleted } from "../../TodoReducer/TodosAction";
import TodoItems from "./TodoItems";

const AddTodos = () => {
  const [text, setText] = useState("");

  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = (text) => {
    dispatch(ADD(text));
    setText("");
  };

  const handleDelete = (id) => {
    dispatch(DELETE(id));
  };

  const handleCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAdd(text)}>ADD</button>
      
      <h2>not complete task</h2>
      <TodoItems
        todos={todos.filter((todo) => !todo.isCompleted)}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
      <h2>complete task</h2>
      <TodoItems
        todos={todos.filter((todo) => todo.isCompleted)}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddTodos;
