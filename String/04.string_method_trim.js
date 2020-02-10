/*
Method trim() digunakan untuk menghapus karakter whitespace di awal dan akhir string. 
Whitespace adalah karakter “spasi”, 
termasuk tab, enter, dan carriage return (karakter penanda untuk pindah baris).
*/
var foo = "      Javascript    ";
console.log(foo.length);
console.log(foo);

foo = foo.trim();
console.log(foo.length);
console.log(foo);
