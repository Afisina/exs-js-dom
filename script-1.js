// DOM SELECTION

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
