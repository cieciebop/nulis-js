var angka = [3, 5, 2, 8, 1, 31, 22, 44, 33, 11];
angka.sort();
console.log(angka);
//Array[1,11,2,22,3,31,33,44,5,8]
/*
Hasilnya tidak seperti yang kita harapkan. Angka 11 diletakkan sebelum angka 2. 
Kenapa ini bisa terjadi? Karena pada saat pengurutan, JavaScript akan mengkonversi setiap angka menjadi string, baru kemudian membandingkan nomor urut karakter unicode dari string-string ini. 
Kode unicode untuk string 11 lebih kecil dari string 2.

*/
console.log("----solusi----");
//Untuk mengatasi masalah diatas, kita harus membuat sebuah function callback sebagai pengatur urutan.
function bandingkan(a, b) {
  if (a < b) {
    return -1; // a lebih kecil
  }
  if (a > b) {
    return 1; // a lebih besar
  }
  return 0; // sama besar
}

var foo2 = [3, 5, 2, 8, 1, 31, 22, 44, 33, 11];
foo2.sort(bandingkan);
console.log(foo2);
