var i = 1000;
for (let i=1; i < 3; i++){
    console.log("Belajar javascript"+i);
}
console.log("Harga Barang: "+i); // harga barang: 1000
/*
perhatikan:
Sekarang, walaupun saya tidak sengaja menggunakan nama variabel yang sama untuk perulan-
gan, kedua variabel ini berbeda scope, sehingga tidak berpengaruh satu sama lain.

Kesimpulannya, semakin kecil ruang lingkup sebuah variabel, semakin bagus, agar kita terhindar
dari kesalahan seperti menggunakan var. Jika anda membuat kode program secara kolaborasi dengan tim,
kemungkinan variabel yang bentrok akan lebih besar. Menggunakan let sebagai pengganti var
bisa memperkecil terjadinya masalah ini.

*/