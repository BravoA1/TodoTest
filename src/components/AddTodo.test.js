import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";

describe("AddTodo", () => {
  test("renders", () => {
    render(<AddTodo />);
    const addTodoInput = screen.getByTestId("addTodoInput");
    expect(addTodoInput).toBeInTheDocument();
    const addTodoButton = screen.getByTestId("addTodoButton");
    expect(addTodoButton).toBeInTheDocument();
  });

  test("Button triggers action", () => {
    render(<AddTodo />);
    const button = screen.getByTestId("addTodoButton");
    fireEvent.click(button);
  });
});
