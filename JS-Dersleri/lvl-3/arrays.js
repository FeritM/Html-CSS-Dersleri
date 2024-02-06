// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

// console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

//! 1-Square bracket ( Array Literal) yöntemi ile dizi tanımlama
//! En çok tercih edilen yöntem
// const names = [
//   "Ahmet",
//   "İsmet",
//   "Saffet",
//   "Can",
//   true,
//   6.6,
//   [1, 3],
//   "Ara Vakti",
// ]
// console.log(names)
// console.log("Uzunluk:", names.length)
// console.log(typeof names) //* object

// //* Diziden Veri Okuma-Yazma (indisleme)
// //* ---------------------------------------------------------

// console.log(names[3]) //? Can
// console.log(names[4]) //? true
// console.log(names[6][0]) //? 1

//? Dizinin son elemanını bir değişkene saklayalım

let sayilar = [0, 1, 2, "Enes", 3, 4, 5, 6, 7, 8, 9, "Ali"];

console.log(sayilar[15]); //?Undifened döndü

sayilar[10] = "Mehmet";
console.log(sayilar[10]);

let isimler = ["Enes", "Ferit", "Yakup", "Hilal"];

console.log(isimler);

isimler[2] = "Yavuz";
console.log(isimler);
