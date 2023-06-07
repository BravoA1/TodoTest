export default function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            edit: false,
            done: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : {
                ...t,
                done: !t.done,
              }
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : {
                ...t,
                edit: !t.edit,
              }
        ),
      };
    }
    case "CHANGE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : {
                ...t,
                content: action.value,
                edit: false,
              }
        ),
      };
    }
    default: {
      throw new Error("Unknown action");
    }
  }
}
