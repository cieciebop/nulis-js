// var foo = 25 adalah tipe data primitif number /
var foo = new Number(52); // object contructor number

var hasil = foo + 25;
console.log(hasil);
console.log(foo.toString(16));
console.log(foo.toExponential(2));

// var foo = "Belajar Javascript" adalah tipe data primitif string
var bar = new String("Belajar Javascript"); // object constructor
var sambung = "Sedang " + bar;

console.log(sambung);
console.log(bar.toUpperCase());
console.log(bar.toLowerCase());
console.log(bar.substr(3, 9));

/*
dengan menggunakan object constructor kita bisa mengakses berbagai method untuk object foo dan bar. 
Method toString() dan toExponential() “melekat” ke Object Number. 
Sedangkan method toUpperCase(), toLowerCase(), dan substr() merupakan kepunyaan dari Object String.
*/
