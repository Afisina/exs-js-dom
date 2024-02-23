// === DOM SELECTION ===

// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.innerHTML = "Learn JavaScript DOM";
const lorem = document.getElementById("lorem");
lorem.style.backgroundColor = "lightblue";
lorem.innerHTML = "DOM (Document Object Model) adalah antarmuka pemrograman berbasis objek yang merepresentasikan dokumen web.";

// document.getElementsByTagName() -> HTMLCollection
const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.color = "orange";
}
li[0].innerHTML = "document.getElementById()";
li[1].innerHTML = "document.getElementsByTagName()";
li[2].innerHTML = "document.getElementsByClassName()";

const p = document.getElementsByTagName("p")[3];
p.innerHTML = "DOM Selection Method - part 1";
p.style.backgroundColor = "lightgreen";

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini di ubah dari javascript";

const p2 = document.getElementsByClassName("p2")[0];
p2.style.backgroundColor = "red";
p2.innerHTML = "Ingat! getElementsByClassName() mengembalikan HTMLCollection, yang struktur datanya mirip array.";

const p3 = document.getElementsByClassName("p3")[0];
p3.innerHTML = "Maka, walaupun hanya terdapat 1 class, tetap harus menyertakan indexnya.";

// document.querySelector() -> element
const p5 = document.querySelector("#d p");
p5.style.color = "green";
p5.style.fontSize = "25px";
p5.innerHTML = "DOM Selection Method - part 2";
p5.style.backgroundColor = "lightgreen";

const li1P5 = document.querySelector("#d ul li:nth-child(1)");
li1P5.innerHTML = "document.querySelector()";

const li2P5 = document.querySelector("section#d ul li:nth-child(2)");
li2P5.style.backgroundColor = "orange";
li2P5.innerHTML = "document.querySelectorAll()";

// const liP5 = document.querySelector("section#d ul li");
// liP5.style.color = "black";
// code di atas hanya memilih element pertama, karena querySelector mengembalikan element, jadi kalo ingin mengubah seluruh li di p5, gunakan querySelectorAll

// document.querySelectorAll() -> NodeList
const liP5 = document.querySelectorAll("#d li");
for (let i = 0; i < liP5.length; i++) {
  liP5[i].style.color = "black";
}

// Mengubah node root
const sectionD = document.querySelector("section#d");
const p6 = sectionD.getElementsByTagName("p")[1];
p6.style.backgroundColor = "lightblue";
p6.innerHTML = "Mengubah node root, dari document ke root yang diinginkan, supaya lebih spesifik dan efektif untuk menyeleksi DOM.";

// === DOM MANIPULATION (element) ===
// element.innerHTML
const judulE = document.getElementById("judul-e");
judulE.innerHTML = "<em>Annisa Afisina</em>";

const sectionE = document.querySelector("section#e");
sectionE.innerHTML = "<div><p>paragraf1</p></div>";

// element.style.<properties>
const judulF = document.querySelector("#judul-f");
judulF.style.color = "lightblue";
judulF.style.backgroundColor = "salmon";
judulF.innerHTML = "DOM Manipulation (element)";

// element.setAttribute
const title = document.getElementsByTagName("h1")[0];
title.setAttribute("name", "annisa");

const link = document.querySelector("section#f a");
link.setAttribute("link", "ig");

// element.classList
const p7 = document.querySelector(".p7");

// DOM Manipulation (node)
const judulH = document.getElementById("judul-h");
judulH.innerHTML = "DOM Manipulation (node)";
judulH.style.backgroundColor = "salmon";

// - document.createElement()
// - document.createTeksNode()
// - node.appendChild ()

// 1. Buat element baru
const pBaru = document.createElement("p");
// 2. Buat node baru
const teksBaru = document.createTextNode("paragraf baru");
// 3. Simpan node baru ke dalam elemen baru
pBaru.appendChild(teksBaru);
// 4. Simpan element baru ke parent element
const sectionH = document.getElementById("h");
sectionH.appendChild(pBaru);
// - parentNode.removeChild()
const linkH = document.querySelector("section#h a");
sectionH.removeChild(linkH);
// - parentNode.replaceChild()
const p9 = sectionH.getElementsByTagName("p")[1];
const h4Baru = document.createElement("h4");
const subJudul = document.createTextNode("ini subjudul!");
h4Baru.appendChild(subJudul);
sectionH.replaceChild(subJudul, p9);

// - node.insertBefore()
const liBaru = document.createElement("li");
const itemBaru = document.createTextNode("item baru");
liBaru.appendChild(itemBaru);
const ul = document.querySelector("section#h ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);
// kode diatas -> node.insertBefore(nodeBaru, disimpan di mana)

pBaru.style.backgroundColor = "lightgreen";
h4Baru.style.color = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";

// === DOM Events ===
const judulI = document.getElementById("judul-i");
judulI.innerHTML = "DOM Events";
judulI.style.backgroundColor = "burlywood";
judulI.style.color = "blueviolet";

// Event Handler
const p12 = document.querySelector(".p12");
const p13 = document.querySelector(".p13");

function ubahWarnaP12() {
  p12.style.color = "red";
  p12.style.backgroundColor = "lightblue";
}

function ubahWarnaP13() {
  p13.style.backgroundColor = "lightgreen";
}

// Event Listener
const p14 = document.getElementsByClassName("p14")[0];
p14.innerHTML = "addEventListener()";

p14.addEventListener("click", function () {
  const ulI = document.querySelector("section#i ul");
  const liBaruI = document.createElement("li");
  const itemBaruI = document.createTextNode("item baru");
  liBaruI.appendChild(itemBaruI);
  ulI.appendChild(liBaruI);
});

p14.addEventListener("mouseenter", function () {
  p14.style.backgroundColor = "lightblue";
});
p14.addEventListener("mouseleave", function () {
  p14.style.backgroundColor = "lightgreen";
});
