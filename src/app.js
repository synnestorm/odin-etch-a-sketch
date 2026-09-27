"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container = document.querySelector("#container");
// this is the logic for the 16x16 grid of divs
for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    divs.className = "div-containers";
    container?.appendChild(divs);
}
//# sourceMappingURL=app.js.map