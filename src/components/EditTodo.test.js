import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EditTodo from "./EditTodo";

const mockTodoList = [
  { id: 1, done: false, edit: false, content: "first" },
  { id: 2, done: false, edit: false, content: "second" },
];

describe("EditTodo", () => {
  test("renders", () => {
    render(<EditTodo todo={mockTodoList[0]} />);
    const editTodoButtonCancel = screen.getByText("Cancel");
    expect(editTodoButtonCancel).toBeInTheDocument();
    const editTodoButtonSave = screen.getByText("Save");
    expect(editTodoButtonSave).toBeInTheDocument();
    const editTodoInput = screen.getByRole("textbox");
    expect(editTodoInput).toBeInTheDocument();
  });
});
