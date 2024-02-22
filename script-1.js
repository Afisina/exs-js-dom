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
p.innerHTML = "DOM Selection Method";
p.style.backgroundColor = "lightgreen";

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini di ubah dari javascript";

const p2 = document.getElementsByClassName("p2")[0];
p2.style.backgroundColor = "red";
p2.innerHTML = "Ingat! getElementsByClassName() mengembalikan HTMLCollection, yang struktur datanya mirip array.";

const p3 = document.getElementsByClassName("p3")[0];
p3.innerHTML = "Maka, walaupun hanya terdapat 1 class, tetap harus menyertakan indexnya.";
