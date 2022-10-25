import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import cuid from "cuid";
//'c' - identifies this as a cuid, and allows you to use it in html entity ids.//
const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    //dispatching addtodo//
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />
    {/* for adding the items*/ }
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddTodo;