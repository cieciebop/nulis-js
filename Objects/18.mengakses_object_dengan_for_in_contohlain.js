var mobil = {
  merk: "Avanza",
  tipe: "MVP",
  harga: 20000000,
  warna: "Merah"
};

var prop;
for (prop in mobil) {
  console.log("Isi property " + prop + "=" + mobil[prop]);
}
