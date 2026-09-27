//testing:
console.log("hellooo");
const container = document.querySelector("#container");
// this is the logic for the 16x16 grid of divs
for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    divs.className = "div-containers";
    container?.appendChild(divs);
    divs.addEventListener("mouseover", function () {
        divs.style.backgroundColor = "grey";
    });
}
export {};
//# sourceMappingURL=app.js.map