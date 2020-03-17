/*
Penulisan pada Arrow Function adalah cara yang lebih pendek untuk membuat fungsi expression.
 Arrow Function tidak memiliki this, tidak memiliki prototypes, 
tidak dapat digunakan untuk konstruktor, dan tidak boleh digunakan sebagai metode objek.

*/

// ES5
function func(a, b, c) {} // function declaration
var func = function(a, b, c) {}; // function expression

//ES6
let func = a => {};
let func = (a, b, c) => {};
