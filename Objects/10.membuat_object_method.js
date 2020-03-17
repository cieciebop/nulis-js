/*
membuat object method sama halnya dengan membuat object property 
tap yang musti diingat di akhir bracket akhirnya dengan (;)

*/

var mobil = {
    merk : "Toyota Avanza",
    tipe : "MPV",
    harga : 2000000,
    warna : "merah",
    // membuat method di object
    hidupkan: function() { return "Mesin dihidupkan";}
};

console.log("Di panggil dengan dot notation");
console.log("--------------------");
console.log(mobil.hidupkan());

console.log("Di panggil dengan bracket notation");
console.log("--------------------");
console.log(mobil["hidupkan"]());
