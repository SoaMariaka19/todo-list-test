import React, { useState } from "react";
import TodoMap from "./TodoMap";
import DoneMap from "./DoneMap";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const handleCheckboxChange = (index) => {
    const newTodoList = [...todoList];
    setDoneList([...doneList, newTodoList[index]]);
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleRemoveDone = (index) => {
    const newDoneList = [...doneList];
    newDoneList.splice(index, 1);
    setDoneList(newDoneList);
  };

  return (
    <div>
    <form onSubmit={(e)=>e.preventDefault()}>
      <input
        type="text"
        value={inputValue}
        placeholder='Enter Todo'
        onChange={handleInputChange}
      />
      <button
          data-testid='btn'
          className="btn-todo" onClick={handleAddTodo}>Add Todo</button>
    </form>
      <h3>Todo:</h3>
      <ul
          data-testid="ulTodo">
        <TodoMap todoList={todoList} handleCheckboxChange={handleCheckboxChange} />
      </ul>
      <h3>Done:</h3>
      <ul
          data-testid="ulDone">
        <DoneMap doneList={doneList} handleRemoveDone={handleRemoveDone} />
      </ul>
    </div>
  );
}

export default TodoList;
