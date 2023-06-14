import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

const mockTodoList = [
  { id: 1, done: false, edit: false, content: "first" },
  { id: 2, done: false, edit: false, content: "second" },
];

const mockFn = jest.fn();

describe("TodoList", () => {
  test("renders with content", () => {
    render(
      <TodoList
        todoList={mockTodoList}
        deleteTodo={mockFn}
        toggleTodo={mockFn}
        editTodo={mockFn}
        changeTodo={mockFn}
      />
    );
    const firstTodo = screen.getByText("first");
    expect(firstTodo).toBeInTheDocument();
    const secondTodo = screen.getByText("second");
    expect(secondTodo).toBeInTheDocument();
  });

  test("renders without content", () => {
    render(
      <TodoList
        todoList={[]}
        deleteTodo={mockFn}
        toggleTodo={mockFn}
        editTodo={mockFn}
        changeTodo={mockFn}
      />
    );
    const empty = screen.getByText("Aucune todo pour le moment");
    expect(empty).toBeInTheDocument();
  });
});
