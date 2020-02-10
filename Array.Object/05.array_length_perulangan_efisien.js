/*
Disini, nilai foo.length saya ambil sebelum perulangan dan disimpan ke dalam variabel panjangArray. 
Variabel inilah yang akan di cek di dalam perulangan.
Kode programnya memang menjadi sedikit panjang, tapi lebih efisien. 
Sekarang JavaScript tidak perlu lagi mengecek kondisi i < foo.length, tapi cukup i < panjangArray.
*/

var foo = ["pisang", "apel", "pepaya", "anggur"];
var panjangArray = foo.length;

for (var i = 0; i < panjangArray; i++) {
  console.log(foo[i]);
}
