/*
Di dalam JavaScript, regular expression ditempatkan ke dalam object tersendiri,
 yakni RegExp Object. Sama seperti mayoritas object bawaan JavaScript lain, 
 kita memiliki 2 cara penulisan: menggunakan object constructor atau cara langsung (literal).
Berikut contoh pembuatan RegExp di dalam JavaScript:

*/

//Penulisan literal
var foo = /ab+c/;
console.log(foo);
console.log(typeof foo);

//penulisan dengan object constructor
var bar = new RegExp("ab+c");
console.log(bar);
console.log(typeof bar);
