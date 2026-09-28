// fetching/creating from the DOM
const container = document.querySelector("#container");
const btnContainer = document.querySelector("#btnContainer");
const resetButton = document.createElement("button");
resetButton.className = "reset-btn";
resetButton.innerHTML = "Reset";
document.body.appendChild(resetButton);
const promptButton = document.createElement("button");
promptButton.className = "prompt-btn";
promptButton.innerHTML = "New grid";
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
    console.log("yooo im clicked");
});
promptButton.addEventListener("click", function () {
    console.log("heey im clicked too!!");
});
export {};
// change the grid button, 1-100
//# sourceMappingURL=app.js.map