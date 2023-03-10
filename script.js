// let container = document.querySelector(".container");
// let table = document.createElement("table");
// table.className = "myTable";
// container.appendChild(table);
// let row = document.createElement("tr");
// row.className = "row";
// table.appendChild(row);
// let col = document.createElement("td");
// col.className = "table_data";
// row.appendChild(col);
// Specify the number of rows and columns for the table

let create = document.querySelector(".create");
create.addEventListener("click", function () {
  const numRows = document.querySelector(".row").value;
  const numCols = document.querySelector(".col").value;
  // Create the table element
  const table = document.createElement("table");

  // Create the rows and cells
  for (let i = 1; i < numRows; i++) {
    // Create a new row element
    const row = table.insertRow();

    for (let j = 1; j < numCols; j++) {
      // Create a new cell element and add it to the row
      const cell = row.insertCell();
      // Add some content to the cell
      cell.innerHTML = `${i},${j}`;
    }
  }

  // Add the table to the document
  document.body.appendChild(table);
});
