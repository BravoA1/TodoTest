import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  editTodo,
  changeTodo,
}) {
  //console.log(todoList);
  return todoList.length ? (
    <ul data-testid="todoList">
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            cancelTodo={() => editTodo(todo.id)}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={() => editTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <>
      <p data-testid="noTodo">Aucune todo pour le moment</p>
    </>
  );
}
