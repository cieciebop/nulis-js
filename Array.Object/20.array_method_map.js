/*
Method map() mirip seperti forEach(), 
dalam artian method ini juga menjalankan sebuah function callback sebagai argument. 
Bedanya, method map() akan mengembalikan sebuah array baru sebagai hasil callback.
Berikut contoh penggunaannya:

*/

var foo = [8, 9, 4, 3, 2, 1, 5];

var bar = foo.map(function(element, index, array) {
  return element * 2;
});
console.log(bar)
