/*
Ketika JavaScript menjalankan function Callback, method forEach() sebenarnya mengirim 3 argumen, yakni:
• Argumen pertama berupa nilai element yang sedang di proses (atau value array). 
• Argumen kedua berupa index element yang sedang di proses (atau key array).
• Argumen ketiga berisi seluruh array asal.
Ketiga argumen ini tidak harus ditulis, hanya jika dibutuhkan saja. Mari kita lihat cara penggunaan argumen ini:


*/
var foo = ["a", "b", "c", "d", "e"];

foo.forEach(function(element) {
  console.log(element);
});
