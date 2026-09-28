// fetching/creating from the DOM
const container = document.querySelector<HTMLDivElement>("#container");

const header = document.createElement("header");
container!.before(header);

const heading = document.createElement("h1");
heading.className = "heading";
heading.textContent = "Etch-A-Sketch";
header.appendChild(heading);

const btnContainer = document.createElement("div");
btnContainer.className = "btn-container";
header.appendChild(btnContainer);
const resetButton = document.createElement("button");
resetButton.className = "reset-btn";
resetButton.textContent = "Reset";
btnContainer.appendChild(resetButton);
const promptButton = document.createElement("button");
promptButton.className = "prompt-btn";
promptButton.textContent = "New Grid";
btnContainer.appendChild(promptButton);

let userInput: number = 16;

// this is the logic for the 16x16 grid of divs
function generateGrid() {
  const divSize = 600 / userInput;
  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    div.className = "div-containers";
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    container!.appendChild(div);

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = randomColor();
    });
  }
}

generateGrid();

// function to get a random color when hovering over divs
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// reset button, to reset the sketch

resetButton.addEventListener("click", function () {
  const divs = container?.querySelectorAll<HTMLElement>(".div-containers");

  divs?.forEach(function (div) {
    div.style.backgroundColor = "#FFFFFF";
  });
});

// prompt button to make the user change grid, will clear existing grid and create a new one

promptButton.addEventListener("click", function () {
  do {
    const promptMessage = prompt("Please enter a number between 1-100!");

    if (promptMessage === null) {
      return;
    }
    const newGridPrompt = Number(promptMessage);
    userInput = newGridPrompt;

    if (Number.isInteger(userInput) && userInput >= 1 && userInput <= 100) {
    } else {
      alert("Please enter a valid number!");
    }
  } while (!Number.isInteger(userInput) || userInput < 1 || userInput > 100);
  container!.innerHTML = "";
  generateGrid();
});
