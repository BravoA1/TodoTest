import styles from "./App.module.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useReducer } from "react";
import todoReducer from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
  });

  function addTodo(content) {
    dispatch({
      type: "ADD_TODO",
      content,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      id,
    });
  }

  function editTodo(id) {
    dispatch({
      type: "EDIT_TODO",
      id,
    });
  }

  function toggleTodo(id) {
    dispatch({
      type: "TOGGLE_TODO",
      id,
    });
  }

  function changeTodo(id, value) {
    dispatch({
      type: "CHANGE_TODO",
      id,
      value,
    });
  }

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.appContainer}`}
    >
      <div className={`card container p20 ${styles.content}`}>
        <h1 className="mb20">TODO LIST APP</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={state.todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}

export default App;
