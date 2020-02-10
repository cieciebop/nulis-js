/*
Wildcard 
jika kita ingin mencari pola yang bisa diganti dengan karakter apa saja. 
Karakter wildcard ditulis dengan tanda titik ( . ).
. = Jika di dalam pola regular expression terdapat tanda titik, 
    artinya karakter itu bisa digantikan dengan karakter apa saja.
*/
var pola = /.b../;

console.log(pola.test("abaa")); // true
console.log(pola.test("aba")); //false
console.log(pola.test("abbbba")); // true
console.log(pola.test("baab")); // false
console.log(pola.test("1b11")); //true
console.log(pola.test(" b   ")); //true
