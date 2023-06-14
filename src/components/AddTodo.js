import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    //console.log(e.target.value);
    const todoValue = e.target.value;
    setValue(todoValue);
  }

  function handleClick() {
    let valueTrim = value.trim();
    if (valueTrim.length) {
      addTodo(valueTrim);
      setValue("");
    } else {
      setValue("");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb20">
      <input
        type="text"
        value={value}
        placeholder="Add a todo"
        onChange={handleChange}
        className="mr20 flex-fill p10"
        data-testid="addTodoInput"
      />
      <button
        onClick={handleClick}
        className="btn btn-primary"
        data-testid="addTodoButton"
      >
        Add
      </button>
    </div>
  );
}
