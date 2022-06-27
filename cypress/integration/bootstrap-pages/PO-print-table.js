import { Table } from "./support/PO-show-table-content";

const table = new Table();

describe("Common Action PoC", function () {
  before("Accessing the webpage", function () {
    cy.visit("https://getbootstrap.com/docs/5.2/layout/breakpoints/");
  });

  it("Printing table information", function () {
    table.showTableContent(".table-responsive");
  });
});
