// hampir sama saja dengan membuat class

function Mobil(merk, tipe, harga) {
  // yang membedaan function 'biasa' dengan contructor function adalah this
  this.merk = merk;
  this.tipe = tipe;
  this.harga = harga;
}

var mobilAndi = new Mobil("DAihatsu", "MPV", "1400000");
console.log(mobilAndi.merk);
console.log(mobilAndi.tipe);

var mobilJoko = new Mobil("Alya", "mini sedan", "90000000");
console.log(mobilJoko.merk);
console.log(mobilJoko.tipe);
