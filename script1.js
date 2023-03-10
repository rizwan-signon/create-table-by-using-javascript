var generate = document.querySelector(".generate");
var main_section = document.querySelector(".main_app");
generate.addEventListener("click", function () {
  let rows = document.querySelector(".row").value;
  let col = document.querySelector(".col").value;
  let table = "<table border=2>";
  for (let i = 1; i <= rows; i++) {
    table = table += "<tr> ";
    for (let j = 1; j <= col; j++) {
      table = table += `<td> value ${i}${j}</td> `;
    }
    table = table + "</tr>";
  }
  table = table + "</table>";
  main_section.insertAdjacentHTML("afterend", table);
});
