export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className="d-flex p10 mb10 align-items-center">
      <span className="flex-fill mr10">
        {todo.content} {todo.done && "✔️"}
      </span>
      <button
        onClick={() => toggleTodo(todo.id)}
        className="btn btn-primary mr10"
      >
        {todo.done ? "Réalisé" : "A faire"}
      </button>
      <button onClick={editTodo} className="btn btn-primary mr10">
        Modifier
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-primary-reverse mr10"
        data-testid="deleteTodo"
      >
        Supprimer
      </button>
    </li>
  );
}
