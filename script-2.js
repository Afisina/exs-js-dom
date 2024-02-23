// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.computedStyleMap.display = "none";
// });

//DOM Traversal
const close = document.querySelectorAll(".close");
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    //alert("tombol ke-" + i);
    //close[i].parentElement.style.display = "none";
    // perbaikan 1 : mengganti close[i] -> eventnya
    e.target.parentElement.style.display = "none";
  });
}

// perbaikan 2 -> menggunakan forEach
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    //Prevent Defaul
    e.preventDefault();
    //Mencegah Event Bubbling
    e.stopPropagation();
  });
});

// DOM Traversal Method
const nama = document.querySelector(".nama");
console.log(nama.parentNode);
console.log(nama.parentElement);
console.log(nama.nextSibling); // enter dihitung text
console.log(nama.nextElementSibling);
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);

const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    alert("ok");
  });
});

// Membuat event pada containernya, supaya saat ada perubahan html di browser, tetap terbaca oleh jsnya
const container = document.querySelectorAll(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
