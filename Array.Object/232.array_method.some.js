/*
array method some kebalikan dari sifat method every

*/

function genap(element) {
  return element % 2 === 0; // bisa juga (element % 2 === 0)
}

var foo = [6, 8, 10, 12, 16];
console.log(foo.some(genap)); // true ada 1 minial angka genap dalam array

var bar = [3, 7, 9, 99, 42];
console.log(bar.some(genap)); // true, ada 1 minial angka genap dalam array

var baz = [3, 7, 9, 99, 41];
console.log(baz.some(genap)); // false, karena tidak satupun memiliki angka genap
