const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const divs = document.createElement("div");
const clear = document.getElementById("clear");
const color = document.getElementById("color");
const randomBtn = document.getElementById("random");
let random = 0;

divs.classList.add("square");

function createGrid(size = 16) {
  let grid = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < grid; i++) {
    container.appendChild(divs.cloneNode(true));
  }
}
function refreshGrid() {
  container.innerHTML = "";
}

function getSliderValue(val = 16) {
  const slider = document.getElementById("gridSize");
  document.getElementById("rangeValue").innerHTML = val + " x " + val;
  console.log((slider.innerHTML = val));
  slider.addEventListener("change", function () {});
  refreshGrid();
  createGrid(val);
}

function clearGrid() {
  let square = document.querySelectorAll(".square");
  square.forEach((s) => (s.style.backgroundColor = ""));
}

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

randomBtn.addEventListener("click", () => {
  const squareDivs = document.querySelectorAll(".square");
  const random = document.getElementsByClassName("randomColor");
  let btnStyle, btnLabel;
  const randomTxt = document.getElementById("randomTxt");
  squareDivs.forEach((squarediv) => squarediv.classList.toggle("randomColor"));

  if (random.length > 0) {
    btnStyle = "green";
    btnLabel = "ON";
    // console.log(random);
  } else {
    btnStyle = "";
    btnLabel = "OFF";
  }
  randomBtn.style.background = btnStyle;
  randomTxt.innerText = btnLabel;
});

container.addEventListener("mouseover", function (e) {
  let colorPicker = color.value;
  let target = e.target.classList.contains("square");
  let target2 = e.target.classList.contains("randomColor");
  if (target) {
    e.target.style.backgroundColor = colorPicker;
  }
  if (target2) {
    e.target.style.backgroundColor = randomColor();
  }
});

color.addEventListener("change", () => {
  /** @type {HTMLElement} */
  let palette = document.querySelector(".material-icons");
  palette.style.color = color.value;
});

clear.addEventListener("click", clearGrid);

window.addEventListener("DOMContentLoaded", () => {
  getSliderValue();
});
