import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }

  const renderForm = () => {
    return (
      /*form for editing the list */
      <form onSubmit={editItemToState}>
        <input ref={textRef} type='text' defaultValue={task.task} />
        <button type='submt'>Update</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <>
        {task.task}
        {/* for editing the list items */ }
        <button onClick={() => setIsUpdate(true)}>Edit</button>
        {/*for deleting the list items */}
        <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
      </>
    );
  };

  return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );
};

export default TodoItem;