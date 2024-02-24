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
