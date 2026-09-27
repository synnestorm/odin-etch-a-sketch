const container = document.querySelector<HTMLDivElement>("#container");

// this is the logic for the 16x16 grid of divs
for (let i = 0; i < 256; i++) {
  const divs = document.createElement("div");
  divs.className = "div-containers";
  container?.appendChild(divs);

  divs.addEventListener("mouseover", function () {
    divs.style.backgroundColor = randomColor();
  });
}

// function to get a random color when hovering over divs
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
