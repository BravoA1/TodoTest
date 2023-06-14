describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("Overall Snapshot", () => {
  it("takes a screenshot", () => {
    cy.visit("http://localhost:3000/");
    cy.screenshot();
  });
});

describe("add todo", () => {
  const mockContent = "test";

  it("add todo in the todo list", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input[data-testid='addTodoInput']").clear().type(mockContent);

    cy.get("button[data-testid='addTodoButton']").click();

    cy.get("ul[data-testid='todoList']").should("contain", mockContent);
  });

  it("doesn't add an empty todo to the list", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button[data-testid='addTodoButton']").click();

    cy.get("p[data-testid='noTodo']").should(
      "contain",
      "Aucune todo pour le moment"
    );
  });
});

describe("delete todo", () => {
  const mockContent = "test";

  it("delete todo from the todo list", () => {
    cy.visit("http://localhost:3000/");

    cy.get("input[data-testid='addTodoInput']").clear().type(mockContent);

    cy.get("button[data-testid='addTodoButton']").click();

    cy.get("ul[data-testid='todoList']").should("contain", mockContent);

    cy.get("button[data-testid='deleteTodo']").click();

    cy.get("p[data-testid='noTodo']").should(
      "contain",
      "Aucune todo pour le moment"
    );
  });
});
