const organicFoods = ["Spinach", "Avocado", "Salmon", "Kale", "Blueberries"];
const listElement = document.getElementById("organic-food-list");

let listHtml = "";
for (let i = 0; i < organicFoods.length; i++) {
  listHtml += `<li>${organicFoods[i]}</li>`;
}
listElement.innerHTML = listHtml;

const container = document.getElementById("table-container");
let tableHtml = "<table>";

for (let i = 1; i <= 12; i++) {
  tableHtml += "<tr>";
  for (let j = 1; j <= 12; j++) {
    tableHtml += `<td>${i * j}</td>`;
  }
  tableHtml += "</tr>";
}

tableHtml += "</table>";
container.innerHTML = tableHtml;