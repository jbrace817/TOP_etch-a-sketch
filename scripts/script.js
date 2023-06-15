const container = document.querySelector(".container");
const squares = document.querySelectorAll(".square");
const divs = document.createElement("div");
divs.classList.add("square");

function gridSize(size) {
  let grid = size * size;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < grid; i++) {
    container.appendChild(divs.cloneNode(true));
  }
}

// squares.forEach((square) => {
//   square.addEventListener("click", function (e) {
//     console.log(e.target);
//   });
// });

document.addEventListener("mouseover", function (e) {
  let target = e.target.closest(".square");
  target.style.backgroundColor = "blue";
});
gridSize(29);
