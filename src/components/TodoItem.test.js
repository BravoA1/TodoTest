import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

const mockTodoList = [
  { id: 1, done: false, edit: false, content: "first" },
  { id: 2, done: false, edit: false, content: "second" },
];

const mockFn = jest.fn();

describe("TodoItem", () => {
  test("renders", () => {
    render(
      <TodoItem
        todo={mockTodoList[0]}
        deleteTodo={mockFn}
        toggleTodo={mockFn}
        editTodo={mockFn}
      />
    );
    const firstTodo = screen.getByText("first");
    expect(firstTodo).toBeInTheDocument();
  });
});
