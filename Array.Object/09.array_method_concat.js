/*
Method concat() digunakan untuk proses penggabungan array. 
Argumen dari method ini bisa diisi dengan variabel array, maupun array literal (array yang biasanya kita buat menggunakan tanda kurung siku).

*/

var foo = ["a", "b", "c", "d"];
var bar = [1, 2, 3, 4];

var fooBar = foo.concat(bar);
console.log(fooBar);

var barFoo = bar.concat(foo);
console.log(barFoo);
