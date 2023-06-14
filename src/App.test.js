import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

const mockTodoList = [
  { id: 1, done: false, edit: false, content: "first" },
  { id: 2, done: false, edit: false, content: "second" },
];

const mockFn = jest.fn();

describe("App", () => {
  test("renders", async () => {
    render(<App />);
    expect(screen.getByText("TODO LIST APP")).toBeInTheDocument();
  });

  test("add todo", async () => {
    render(<App />);

    //input.value = "test todo";
    const mockvalue = "test todo";

    const input = screen.getByPlaceholderText("Add a todo");
    fireEvent.change(input, { target: { value: mockvalue } });

    //Simulate.click(screen.getByText("Add"));

    //await wait(() => screen.getByText("test todo"));

    //expect(screen.getByText("test todo")).toBeInTheDocument();
    //expect(input.value).toEqual("");

    const buttonAdd = screen.getByText("Add");
    fireEvent.click(buttonAdd);

    await waitFor(() => {
      const expectedResult = screen.getByText(mockvalue);
      expect(expectedResult).toBeInTheDocument();
    });
  });
});
