/*
Method Number.isNaN() digunakan untuk mengecek apakah hasil operasi / suatu variabel berisi NaN atau bukan. 
Hasilnya true jika itu NaN, dan false jika bukan NaN:

NaN = Not a Number
*/
var foo;
foo = 5;
console.log(Number.isNaN(foo)); // false

foo = 5 / "a";
console.log(Number.isNaN(foo));
