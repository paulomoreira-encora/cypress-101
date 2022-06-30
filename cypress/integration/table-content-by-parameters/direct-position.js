import { TableUtils } from "../../support/table-Utils/table-utils-commonActions";

describe("Get table element by direct position", () => {
  const tableUtils = new TableUtils();
  const tableLocator = "#AuthorsTable > .table-responsive";

  beforeEach("Acessing the table page", () => {
    cy.visit("https://chandanachaitanya.github.io/selenium-practice-site/");
  });

  it("Searching cell value by direct position", () => {
    tableUtils.getCellContentByDirectPosition(tableLocator, 1, 0);
    tableUtils.getCellContentByDirectPosition(tableLocator, 3, 0);
    tableUtils.getCellContentByDirectPosition(tableLocator, 2, 3);
  });
});
