// fetching/creating from the DOM
const container = document.querySelector("#container");
const resetButton = document.createElement("button");
resetButton.className = "reset-btn";
resetButton.innerHTML = "Reset";
document.body.appendChild(resetButton);
const promptButton = document.createElement("button");
promptButton.className = "prompt-btn";
promptButton.innerHTML = "New Grid";
document.body.appendChild(promptButton);
// this is the logic for the 16x16 grid of divs
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.className = "div-containers";
    container?.appendChild(div);
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = randomColor();
    });
}
// function to get a random color when hovering over divs
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
// reset button, to reset the sketch
resetButton.addEventListener("click", function () {
    const divs = container?.querySelectorAll(".div-containers");
    divs?.forEach(function (div) {
        div.style.backgroundColor = "#FFFFFF";
    });
});
promptButton.addEventListener("click", function () {
    const newGridPrompt = Number(prompt("Enter a number between 1-100!"));
    const userInput = newGridPrompt;
    if (Number.isInteger(userInput) && userInput >= 1 && userInput <= 100) {
        console.log("its an integer!");
    }
    else {
        alert("Please enter a valid number!");
    }
});
export {};
//# sourceMappingURL=app.js.map