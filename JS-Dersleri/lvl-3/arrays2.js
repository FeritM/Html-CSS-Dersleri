let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];

let arabalar2 = ["ferrari", "tofaş"];

// push : dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
// unshift: dizinin başına eleman ekler, eleman sayısını geriye döner
// pop : dizinin sonundan eleman siler, eleman sayısını döner
// shift : dizinin başından eleman sile, eleman sayısını döner
// splice (index, incdex) :eleman eklemek ve silmek için kullanılır.
// toString: diziyi stringe çevirebiliriz.
// join : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz
// concat : dizileri birleştirmek için kullanılır.
// slice (dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
// length :dizinin uzunluğunu verir.
// reverse: dizinin elemanlarını ters çevirmek
// split(bölmek): belirli bir ifadeye göre bölüp diziye çevirmek.
// indexOf elemanın index numarasını verir.
// includes: verilen elemanı içeriyor mu ona bakar
//?PUSH METHOT

console.log(arabalar.length);
arabalar.push("opel");
console.log(arabalar);
//unshit  methot
arabalar.unshift("Hyundai");
console.log(arabalar);

arabalar.splice(0, 0, "ford");
console.log(arabalar);

// arabalar.splice(1,4)
// console.log(arabalar);

//splice methot
arabalar.splice(1, 3);
console.log(arabalar);

console.log(typeof arabalar);
arabalar.splice;

//join methot
let stringArabalar = arabalar.join("-");
console.log(stringArabalar);

//Concat methot

let birleşmişDizi = arabalar.concat(arabalar2);
console.log(birleşmişDizi);

//reverse methot
console.log(arabalar);
arabalar.reverse();
console.log(arabalar);

//split methot

let isimler ="Ali,Bekir,Veli"

let isimlerDizi =isimler.split(",")
console.log(typeof isimlerDizi);
console.log(isimlerDizi);
