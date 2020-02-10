class Mobil {
  constructor(merk, tipe, harga) {
    this.merk = merk;
    this.tipe = tipe;
    this.harga = harga;
  }
  hidupkan() {
    return "Mesin " + this.merk + " Dihidupkan";
  }
}
var mobilAndi = new Mobil("DAihatsu", "MVP", "1600000000");
console.log(mobilAndi.merk);
console.log(mobilAndi.hidupkan());

var mobilJoko = new Mobil("Camry", "Sedan", "3434333333");
console.log(mobilJoko.merk);
console.log(mobilJoko.hidupkan());
