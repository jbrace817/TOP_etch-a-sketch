const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const divs = document.createElement("div");
const clear = document.getElementById("clear");
const color = document.getElementById("color");
const randomBtn = document.getElementById("random");
const eraserIcon = document.getElementById("eraser");

divs.classList.add("square");

function createGrid(size = 16) {
  let grid = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  eraserIcon.style.color = "#d8d5d5";
  randomBtn.innerHTML =
    "<i class='fa fa-toggle-off' style='font-size:36px; color: #d8d5d5'></i>";

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

//EventListener for Random color toggle switch
randomBtn.addEventListener("click", () => {
  const squareDivs = document.querySelectorAll(".square");
  const random = document.getElementsByClassName("randomColor");
  let btnStyle;
  squareDivs.forEach((squarediv) => squarediv.classList.toggle("randomColor"));

  if (random.length > 0) {
    //Button ON
    btnStyle = "#2676ed";
    // console.log(random);
    randomBtn.innerHTML =
      "<i class='fa fa-toggle-on' style='font-size:36px'></i>";
  } else {
    //Button OFF
    btnStyle = "#d8d5d5";
    randomBtn.innerHTML =
      "<i class='fa fa-toggle-off' style='font-size:36px'></i>";
  }
  randomBtn.style.color = btnStyle;
});

eraser.addEventListener("click", () => {
  const squareDivs = document.querySelectorAll(".square");
  const erase = document.getElementsByClassName("eraser");
  squareDivs.forEach((squarediv) => squarediv.classList.toggle("eraser"));
  if (erase.length > 0) {
    //ON
    eraserIcon.style.color = "#df93c5";
  } else {
    //OFF
    eraserIcon.style.color = "#d8d5d5";
  }
});

container.addEventListener("mouseover", function (e) {
  let colorPicker = color.value;
  let target = e.target.classList.contains("square");
  let target2 = e.target.classList.contains("randomColor");
  let erase = e.target.classList.contains("eraser");
  if (target) {
    e.target.style.backgroundColor = colorPicker;
  }
  if (target && target2) {
    e.target.style.backgroundColor = randomColor();
  }
  if (erase) {
    e.target.style.backgroundColor = "white";
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
