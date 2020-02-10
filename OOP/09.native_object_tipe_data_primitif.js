var foo = 45;

console.log(foo.toString(16));
console.log(foo.toExponential(3, 9));

var bar = "Belajar Javascript";

console.log(bar.toUpperCase());
console.log(bar.toLowerCase());
console.log(bar.substr(3, 9));

/*
Jadi jika hasilnya sama saja, mana yang lebih baik? 
Membuat variabel menggunakan tipe data primitif atau menggunakan object constructor?
Jawabannya: lebih baik menggunakan tipe data primitif. 
Karena object constructor butuh alokasi memory komputer yang lebih banyak dan waktu proses yang sedikit lebih lama.

*/
