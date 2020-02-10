/*
Pola diatas hanya akan cocok jika keempat karakter tersebut ada di awal dan diakhir string.
Maksudnya string tersebut harus terdiri dari 4 karakter, tidak boleh kurang maupun lebih:
*/
var pola = /^.b..$/;

console.log(pola.test("abaa"));
console.log(pola.test("aba")); //
console.log(pola.test("abbbba")); //
console.log(pola.test("baab")); //
console.log(pola.test("1b11")); //
console.log(pola.test(" b   ")); //
