import {
  showColumnsContent,
  showRowsContent,
} from "./support/show-table-content-common-Action.js";

before("Accessing Get Bootstrap", () => {
  cy.visit("https://getbootstrap.com/");
});

it("Teste", () => {
  cy.window().then((win) => {
    win.location.replace(
      "https://getbootstrap.com/docs/5.2/layout/breakpoints/"
    );
  });
  showRowsContent(".table-responsive");
  showColumnsContent(".table-responsive");
});
