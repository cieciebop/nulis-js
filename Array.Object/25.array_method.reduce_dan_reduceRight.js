/*
Kedua method ini digunakan untuk memproses total seluruh element array dan menghasilkan 1 nilai akhi

Proses untuk method reduce() dan reduceRight() melibatkan sebuah function callback, dan satu nilai awal (opsional).
Sebagai argumen ke dalam function callback, bisa diisi dengan 4 nilai:
• Argumen pertama: sebagai accumulator, atau variabel penampung total. • Argumen kedua: nilai array yang saat ini sedang di proses.
• Argumen ketiga (opsional): index array yang saat ini sedang di proses.
• Argumen keempat (opsional): berisi seluruh element array.

*/
function tambah(total, angka) {
  return total + angka;
}
var foo = [5, 7, 14, 12, 16];
console.log(foo.reduce(tambah)); // hasilnya 5 + 7 + 14 + 12 + 16 = 54

// 16 + 12 + 14 + 7 + 5 memuliany dari sebelah kanan 16 + 12 + 14 + 7 + 5 = 54 + 10
console.log(foo.reduce(tambah, 10)); // 64

// 16 + 12 + 14 + 7 + 5 memuliany dari sebelah kanan 16 + 12 + 14 + 7 + 5 = 54 + 10
console.log(foo.reduceRight(tambah)); // 54
console.log(foo.reduceRight(tambah, 10)); // 64
