var mobil = {
  merk: "Avanza",
  tipe: "MVP",
  harga: 20000000,
  warna: "Merah",
  hidupkan: function() {
    return "mesin dihidupkan";
  }
};

var prop;
for (prop in mobil) {
  console.log("Isi" + prop + " = " + mobil[prop]);
}
// Hasilnya, yang ditampilkan oleh perulangan for in adalah isi pendefenisian method tersebut.
