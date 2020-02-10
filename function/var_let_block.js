// Perbedaan antara var dan let ada di variable scope. Jika kita membuat variabel dengan var,
// variabel tersebut dibatasi di ruang function. Dengan kata lain, yang bisa membatasi scope
// variabel yang di defenisikan dengan keyword var hanyalah sebuah function.
// Dilain pihak, variabel yang dibuat menggunakan let memiliki scope yang lebih kecil, yakni
// dibatasi oleh tanda kurung kurawal yang biasanya digunakan untuk block kode program. Selain
// itu juga dibatasi oleh function seperti layaknya variabel yang dibuat dengan var.
{
    var a = "Belajar Javascript";
    console.log(a);
}
console.log(a);
{
    let b = "Belajar Web Programming";
    console.log(b);
}
console.log(b);
