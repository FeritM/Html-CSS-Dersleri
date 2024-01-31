// function hesapla(num1,num2,islem){
    // console.log(num1*num2);
//     if (islem==="+") {return num2 +num1
        
//     }
//     else if(islem==="-"){ return num1-num2

//     } else {return 0
        
//     }
// }
// const sonuc = hesapla (3,5,"+")
// console.log(sonuc);
//  console.log(hesapla(4,2,"-"));

const tekVeyaCift = function(num){
    let sonuc = ""
    if (num%2==0) {
        sonuc=`${num} Çifttir`
    } else { sonuc= `${num} Tektir`
        
    }
    return sonuc

}

const bilgi = tekVeyaCift(5)
console.log(bilgi);
console.log(tekVeyaCift(4)); 


//? ÖRNEK 

function usAlma(taban,us){

return taban**us
    }
const usAl = function(taban,us){
    return taban**us
}
const us = usAl(3,4)
console.log(us);

//? ÖRNEK2


