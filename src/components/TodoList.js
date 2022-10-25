import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  {/* for using the data present in store*/ }
  const taskobj = useSelector((state) => state.todos.data);
  const taskItems = taskobj.map((task) => {
    return <TodoItem task={task} key={task.id} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;