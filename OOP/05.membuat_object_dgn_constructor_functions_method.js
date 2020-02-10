// hampir sama saja dengan membuat class

function Mobil(merk, tipe, harga) {
  // yang membedaan function 'biasa' dengan contructor function adalah this
  this.merk = merk;
  this.tipe = tipe;
  this.harga = harga;

  this.hidupkan = function() {
    return "Mesin dihidupkan";
  };
  this.pergi = function(tempat) {
    return "Pergi ke " + tempat + " dengan " + this.merk;
  };
}

var mobilAndi = new Mobil("DAihatsu", "MPV", "1400000");

var mobilJoko = new Mobil("Alya", "mini sedan", "90000000");

console.log(mobilAndi.hidupkan());
console.log(mobilJoko.hidupkan());

console.log(mobilAndi.pergi("Bali"));
console.log(mobilJoko.pergi("Jakarta"));
