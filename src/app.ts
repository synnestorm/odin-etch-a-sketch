// fetching/creating from the DOM
const container = document.querySelector<HTMLDivElement>("#container");

const resetButton = document.createElement("button");
resetButton.className = "reset-btn";
resetButton.innerHTML = "Reset";
document.body.appendChild(resetButton);
const promptButton = document.createElement("button");
promptButton.className = "prompt-btn";
promptButton.innerHTML = "New Grid";
document.body.appendChild(promptButton);

let userInput: number = 16;

// this is the logic for the 16x16 grid of divs
function generateGrid() {
  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    div.className = "div-containers";
    container?.appendChild(div);

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
});
