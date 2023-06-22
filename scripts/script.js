const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const divs = document.createElement("div");
divs.classList.add("square");

function createGrid(size = 16) {
  let grid = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < grid; i++) {
    container.appendChild(divs.cloneNode(true));
  }
}
function clearGrid() {
  container.innerHTML = "";
}

function getSliderValue(val = 16) {
  const slider = document.getElementById("gridSize");
  document.getElementById("rangeValue").innerHTML = val + " x " + val;
  console.log((slider.innerHTML = val));
  slider.addEventListener("change", function () {});
  clearGrid();
  createGrid(val);
}

container.addEventListener("mouseover", function (e) {
  // let target = e.target.closest(".square");
  let target = e.target.classList.contains("square");
  if (target) {
    e.target.style.backgroundColor = "blue";
  }
  // console.log(e.target);
});

window.addEventListener("DOMContentLoaded", () => {
  getSliderValue();
});
