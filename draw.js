let gridSize = 64;

for (let i = 1; i < gridSize + 1; i++) {
  //console.log(i);
  createBox();
}

function createBox() {
  const boxes = document.querySelector("#boxes");
  console.log(boxes);
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "box");
  boxes.appendChild(newDiv);
  console.log(newDiv);
}

