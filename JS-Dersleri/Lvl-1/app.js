//             Ders ortalaması bulmak


// let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"))
// let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"))

// let final = Number(prompt("Final notunuzu giriniz :"))

// let ortalama = vize1 * 0.3 +vize2*0.3 + final*0.4
// console.log(ortalama);

// if(ortalama>=60){
//     alert("Dersten geçtiniz tebrikler :))")
//     console.log("Dersten geçtiniz tebrikler :))");
// }else{
//     alert("Kaldınız geçmiş olsın =(")
//     console.log("Kaldınız geçmiş olsın =(");
// }

// let sayi1 = Number(prompt("Ders notunuzu giriniz : "))


// if  ( sayi1>=90 && sayi1<=100) {
//   console.log("Tebrikler A notu ile geçtiniz");
// }else if (sayi1>=80 && sayi1<90){
//     console.log("Tebrikler B notu ile geçtiniz");
// }else if (sayi1>=70 && sayi1<80){
//     console.log("Tebrikler C notu ile geçtiniz");
// }else if (sayi1>=60 && sayi1<70){
//     console.log("Tebrikler D notu ile geçtiniz");
// }else if (sayi1>=50 && sayi1<60){
//     console.log("Tebrikler E notu ile geçtiniz");
// }else if(sayi1<50 && sayi1>=0){
//     console.log("Dersten kaldınız");
// }
// else{
//     alert("Yanlış sayi girdiniz")
//     console.log("YANLIŞ SAYI GRİDİNİZ");
// }

// let secilenYol = prompt("gitmek istediğiniz yolu seçiniz");
// if (secilenYol == 1){
//   alert("seçtiğiniz yol " + secilenYol + ".yoldur...");
//   console.log("seçtiğiniz yol " + secilenYol + ".yoldur...");
// }else if (secilenYol == 2){
//   alert("seçtiğiniz yol " + secilenYol + ".yoldur...");
//   console.log("seçtiğiniz yol " + secilenYol + ".yoldur...");
// }else if (secilenYol == 3){
//   alert("seçtiğiniz yol " + secilenYol + ".yoldur...");
//   console.log("seçtiğiniz yol " + secilenYol + ".yoldur...");
// }else{
//   alert("yalnış yol seçtiniz!!!!")
// }
// let sayi1 = +prompt("0-100 arasında bir sayı giriniz")

// while (sayi1<0 || sayi1>100) {
//     console.log("Girilen sayı 0-100 arasında olmalıdır");
//     sayi1=+prompt("0-100 arasında bir sayı giriniz")
    
// }


// for (let i = 0; i <= 10; i=i+2) {
//     console.log(i);
//     if (i>5) {console.log(
//       "i sayısı 5 ten büyüktür"
//     );
      
//     }
    
// }
//  for(let i=1 ; i<=10;i++){
//     if(i%2==1){
//         console.log("Enes");
//     }else{
//         console.log("Naber");
//     }
//  }
// let toplam =0
//  for(let i = 50 ; i>=1; i--){ 
//     toplam=toplam +i
//     console.log(i);

//  }
//  console.log("Toplam : " ,toplam);

// let sayac =1
// while (sayac<=15) {
//     console.log(sayac);

//     sayac++
    
// }
// let sayac2 =1
// while (sayac2<=19) {
//     if(sayac2%2==0){console.log(sayac2);}
//     sayac2++
    
    
// }
// let sayac3 =1
// while (sayac3<=19) {
//     if(sayac3%2==1){console.log(sayac3);}
//     sayac3++
// }

// let sayac4 =1
// while (true)
//  {console.log(sayac4);
//     if (sayac4==7) {
//         break;
//     }    sayac4++
// }

// let sayac=1
// do {
//     console.log(sayac);
//     sayac++
    
// } while (sayac<=10);

//? 1 den 20 ye kadar olan tek sayıların toplamı

// let sayı=1
// let toplam=0


// do {
//     console.log("1 den 20 ye kadar olan tek sayıların toplamı");
    

// } while (sayı<=20);
// sayı++
// if(sayı%2==1){

// }
//* ÇOKLU İF KULLANIMI
//?Örnek1
//* Adını ve tck yaz ad :bos gecılmez tck :11 hane olsun

// let ad =prompt("İsminizi giriniz")
// let tckn = prompt("Lütfen TCKN doğru şekilde giriniz")

// kontrolEt(ad,tckn)

// function kontrolEt(ad,tckn){
//   if(ad!==""){
//     if (tckn.length==11) {
//       console.log("isim ve tckn problemsiz girildi");
      
//     }else{
//       console.log("Lütfen tcnizi 11 karakter olarak giriniz");

//     }

//   }else 
//   console.log("Lütfen isim alanını boş bırakmayınız");
// }
//?ÖRNEK2

// kontrolEt2(ad,tckn)

// function kontrolEt2(ad,tckn) {
//   if (ad=="") {
//     console.log("Lütfen isim alanınızı boş bırakmayınız");
//     return
//   }
//   if (tckn.length!=11) {
//     console.log("Lütfen TCKN 11 hane olarak giriniz");
//     return;
//   }
//   console.log("isim ve tcniz problemsiz girildi");
  
// }

//! Örnek 3 Beden Kitle Endeksi Bulmak


let kg=Number(prompt("Lütfen kilonuzu giriniz"))
let boy =Number(prompt("Lütfen boyunuzu giriniz"))
let sonuc = kg/(boy*2)

if (boy<=0 || kg<=0){
  console.log("Negatif ifade kullanamazsınız");
}


else if (sonuc <18.5 && sonuc>14 ) {
  console.log("ideal kilonuzun altındasınız");
  
} else  if (sonuc>=18.5 &&  sonuc <= 24.9 ){
  console.log("İdeal kilodasınız");
  
}else if (sonuc>25 &&sonuc<=39.9){
  console.log("İdeal kilonun üstündesiniz");
}else if(sonuc>40){
  console.log("Obezsiniz");
}
else if(sonuc<14){
  console.log("Yaşamsal faaliyetleriniz tehlike altındadır");
}
else {
  console.log("Yanlış ifade kullandınız");
}










  
