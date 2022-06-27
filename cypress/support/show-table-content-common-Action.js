export var showRowsContent = function (table_info) {
  const table = cy.get(table_info);

  return table.find("tr").each(($row) => {
    cy.log($row.text());
  });
};

export var showColumnsContent = function (table_info) {
  const table = cy.get(table_info);

  return table.find("td").each(($row) => {
    cy.log($row.text());
  });
};
