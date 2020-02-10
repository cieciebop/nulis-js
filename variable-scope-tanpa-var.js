function foo(){
    //perhatian tanpa var
     a = 21;
     b = 56;
    return (a+b);
}

var a = 5;
var b =12;
var c = foo();

console.log(a);
console.log(b);
console.log(c);
// Ini merupakan perbedaan mendasar jika sebuah variabel di defenisikan tanpa var. Ketika ditulis
// variabel a akan berefek menjadi global scope, walaupun ditulis dari dalam function.
// tidak disarankan menulis variable tanpa  perintah var/let tidak disarankan

