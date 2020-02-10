var mobil = {
    merk : "Toyota Avanza",
    tipe : "MPV",
    harga : 2000000,
    warna : "merah",
    // membuat method di object dengan argument
    pergi: function(tempat) { return "Pergi ke-"+ tempat;}
};

console.log(mobil.pergi("Medan"));
mobil.pergi = "Methodnya sudah tertimpa....";
console.log(mobil.pergi("Bogor"));

/*
Dalam contoh diatas, saya mendefenisikan sebuah method pergi() . Kemduian, dengan tidak
sengaja (eh..), saya menimpanya dengan perintah:

mobil.pergi = "Methodnya sudah tertimpa..";

Karena perintah ini, method pergi() sudah tidak bisa diakses lagi, karena saya sudah menimpa
isinya dengan sebuah string. JavaScript membolehkan hal ini terjadi dan tidak menampilkan
pesan error apapun. Error diatas baru tampil ketika saya mencoba mengakses method pergi()
yang sudah berubah menjadi property pergi .
Jadi, kita harus berhati-hati dalam menulis property dan method object JavaScript, karena sangat
mudah tertimpa dengan nilai lain.
*/