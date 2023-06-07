import { useState } from "react";

export default function EditTodo({ changeTodo, todo, cancelTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const todoValue = e.target.value;
    setValue(todoValue);
  }

  function handleClick() {
    let valueTrim = value.trim();
    if (valueTrim.length) {
      changeTodo(todo.id, value);
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
      />
      <button onClick={cancelTodo} className="btn btn-primary mr10">
        Cancel
      </button>
      <button onClick={handleClick} className="btn btn-primary">
        Save
      </button>
    </div>
  );
}
