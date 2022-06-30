import { TableUtils } from "../../support/table-Utils/table-utils-commonActions";

describe("Getting same row element position specify column result", () => {
  const tableUtils = new TableUtils();
  const tableLocator = ".table.table-striped.dataTable";

  beforeEach("Acessing the table page", () => {
    cy.visit("https://datatables.net/examples/styling/bootstrap5.html");
  });

  it("Getting same row element position specify column result", () => {
    tableUtils.getCellContentBySpecificRowAndColumn(tableLocator, "Bradley Greer", "Position")
    tableUtils.getCellContentBySpecificRowAndColumn(tableLocator, "Angelica Ramos", "Salary")
    tableUtils.getCellContentBySpecificRowAndColumn(tableLocator, "Cedric Kelly", "Office")
  });
});
