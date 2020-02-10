var mobil = {
  merk: "Avanza",
  tipe: "MVP",
  harga: 20000000,
  warna: "Merah"
};

var prop;
for (prop in mobil) {
  console.log("Isi Property" + prop + " = " + mobil.prop);
}
/*
ingat for in tidak bisa ditulis dengan dot bracket hasilnya undefined
*/
