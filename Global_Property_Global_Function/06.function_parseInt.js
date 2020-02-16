/*
Function parseInt() sama fungsinya dengan method Number.parseInt(), 
yakni digunakan untuk mengkonversi nilai atau variabel menjadi angka integer (angka bulat). 
Jika di dalam string asal terdapat nilai pecahan, bagian pecahan akan dibuang. 
Jika tidak bisa dikonversi menjadi number, method ini mengembalikan nilai NaN.


*/
var foo = "1234.567";
console.log(parseInt(foo)); // 1234
console.log(parseInt(99.99)); //99
