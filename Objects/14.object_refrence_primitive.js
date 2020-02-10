var mahasiswa = "Andi";
var mahasiswaBaru = mahasiswa;

console.log(mahasiswa); // Andi
console.log(mahasiswaBaru); // Andi


mahasiswaBaru = "Joko";
console.log(mahasiswa); // Andi
console.log(mahasiswaBaru); // Joko

mahasiswa = "Vino";
console.log(mahasiswa); // Vino
console.log(mahasiswaBaru);  // Joko

/*
Kata kunci disini adalah, nilai dari variabel mahasiswa dikirim ke mahasiswaBaru . Dengan
demikian, ketika isi variabel mahasiswaBaru saya ubah menjadi "Joko" , variabel mahasiswa tetap
berisi string "Andi" , karena kedua variabel ini saling terpisah dan memiliki nilai masing-masing.
Begitu pula ketika saya mengubah nilai variabel mahasiswa menjadi "Vino" , dimana yang
berubah hanya nilai dari variabel mahasiswa saja. Variabel mahasiswaBaru tetap berisi string
"Joko" .
Dalam istilah bahasa pemrograman, operasi var mahasiswaBaru = mahasiswa disebut sebagai
“assignment by value”, dimana yang dikirim ke variabel mahasiswaBaru adalah nilai (value)
dari variabel mahasiswa . Di dalam JavaScript, seluruh tipe data primitive (number, string, dan
boolean) menggunakan prinsip “assignment by value”.

*/