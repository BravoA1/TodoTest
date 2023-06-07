import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

const mockTodoList = [
  { id: 1, done: false, edit: false, content: "first" },
  { id: 2, done: false, edit: false, content: "second" },
];

const mockFn = jest.fn();

describe("TodoList", () => {
  test("renders", () => {
    render(
      <TodoList
        todoList={mockTodoList}
        deleteTodo={mockFn}
        toggleTodo={mockFn}
        editTodo={mockFn}
        changeTodo={mockFn}
      />
    );
    const secondTodo = screen.getByText("second");
    expect(secondTodo).toBeInTheDocument();
  });
});
