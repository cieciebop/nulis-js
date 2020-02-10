var mobil = {
    merk : "Toyota Avanza",
    tipe : "MPV",
    harga : 2000000,
    warna : "merah",
    // membuat method di object dengan argument
    pergi: function(tempat) { return "Pergi ke-"+ tempat;}
};

console.log("Di panggil dengan dot notation");
console.log("--------------------");
console.log(mobil.pergi("Medan"));

console.log("Di panggil dengan bracket notation");
console.log("--------------------");
console.log(mobil["pergi"]("Bogor"));