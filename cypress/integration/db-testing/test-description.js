// <reference types="cypress" />

describe("Database Testing", () => {
  it("Create table", () => {
    cy.task(
      "queryDb",
      `CREATE TABLE owners (id INT, name VARCHAR(20), email VARCHAR(20))`
    );
  });

  it.only("Select all", () => {
    cy.task("queryDb", `SELECT * FROM owners`).each((result) => {
      cy.log(result.id, result.name, result.email);
    });
  });

  it("Insert new data", () => {
    cy.task(
      "queryDb",
      `INSERT INTO owners (id, name, email) VALUES
       (1, "Aegon", "test@gmail.com"),
       (03, "John", "test2@gmail.com"),
       (04, "Tyrion", "test3@gmail.com"),
       (05, "Jorah", "test4@gmail.com")`
    ).then((result) => { 
      expect(result.affectedRows).to.be.equal(3);
    });
  });

  it("Update row", () => {
    cy.task(
      "queryDb",
      `UPDATE owners SET email="testatt2@gmail.com" WHERE id=03`
    ).then((result) => {
      expect(result.changedRows).to.be.equal(1);
    });
  });

  it("Delete row", () => {
    cy.task("queryDb", `DELETE`);
  });
});
