class Mobil {
  constructor(merkArg, tipeArg, hargaArg) {
    this.merk = merkArg;
    this.tipe = tipeArg;
    this.harga = hargaArg;
  }
}
var mobilAndi = new Mobil("Daihatsu", "MPV", "1459009890");
console.log(mobilAndi.merk);
console.log(mobilAndi.tipe);

var mobilJoko = new Mobil("Camry", "Sedan", "18098989");
console.log(mobilJoko.merk);
console.log(mobilJoko.tipe);
/*
Ketiga argumen akan dipindahkan ke property this.merk, this.tipe dan this.harga. 
Sehingga bisa diakses dari mobilJoko.merk, mobilJoko.tipe dan mobilJoko.harga.
*/
