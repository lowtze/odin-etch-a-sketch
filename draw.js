const boxes = document.querySelector("#boxes");

function createGrid() {
  let gridSize = prompt("How many boxes per side?");

  boxes.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  boxes.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;  

  for (let i = 0; i < gridSize * gridSize; i++) {
    //console.log(i);
    createBox();
  }
}

function createBox() {
  //console.log(boxes);
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "box");
  boxes.appendChild(newDiv);
  //console.log(newDiv);
}

function clearGrid() {
  boxes.innerHTML = "";
}

const genBtn = document.querySelector("#generate");
genBtn.addEventListener("click", createGrid);

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearGrid);

/*
todos:

- add color option
- have color persist on click on each box
- toggle colors
*/