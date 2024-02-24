// EXERCISE 1
const changeBgColor = document.getElementById("changeBtn");

//const bgColor = document.querySelector("body");
// alternatif bgColor -> document.body, karena khusus untuk body tidak perlu ditangkan menggunakan query selection

// cara 1 : menggunakan Event Handler
changeBgColor.onclick = function () {
  document.body.classList.toggle("biru-muda");
};

// cara 2 : menggunakan addEventListener()
// changeBgColor.addEventListener("click", function () {
//   bgColor.style.backgroundColor = "blue";
// });

// EXERCISE 2
const randomColorBtn = document.createElement("button");
const txtRandomColorBtn = document.createTextNode("Random Color!");
randomColorBtn.appendChild(txtRandomColorBtn);
randomColorBtn.setAttribute("type", "button");
changeBgColor.after(randomColorBtn);

randomColorBtn.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// EXERCISE 3
// const sliderRed = document.querySelector("input[name=sliderRed]");
// const sliderGreen = document.querySelector("input[name=sliderGreen]");
// const sliderBlue = document.querySelector("input[name=sliderBlue]");

// sliderRed.addEventListener("input", function () {
//   const r = sliderRed.value;
//   const g = sliderGreen.value;
//   const b = sliderBlue.value;
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

// sliderGreen.addEventListener("input", function () {
//   const r = sliderRed.value;
//   const g = sliderGreen.value;
//   const b = sliderBlue.value;
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

// sliderBlue.addEventListener("input", function () {
//   const r = sliderRed.value;
//   const g = sliderGreen.value;
//   const b = sliderBlue.value;
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

// Alternatif exercise 3
const rangeColor = document.querySelectorAll("input");
for (let i = 0; i < rangeColor.length; i++) {
  rangeColor[i].addEventListener("input", function () {
    const r = rangeColor[0].value;
    const g = rangeColor[1].value;
    const b = rangeColor[2].value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}
