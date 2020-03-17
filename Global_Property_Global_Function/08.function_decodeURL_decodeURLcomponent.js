/*
Function decodeURI() dan decodeURIComponent()
 merupakan kebalikan dari fungsi encodeURI() dan encodeURIComponent(). Fungsi decodeURI() dan decodeURIComponent() 
digunakan untuk membalik string yang telah dikodekan oleh fungsi encodeURI() dan encodeURIComponent().

*/
var foo = "http://www.duniailkom.com/Belajar #JavaScript";
var bar = encodeURI(foo);
var baz = encodeURIComponent(foo);

console.log(bar);
console.log(baz);

//balikin
console.log(decodeURI(bar));
console.log(decodeURIComponent(bar));
