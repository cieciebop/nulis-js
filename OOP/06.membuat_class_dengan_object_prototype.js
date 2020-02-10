/*
Selain membuat “kelompok object” menggunakan constructor functions, 
kita juga bisa membu- atnya menggunakan object khusus yang bernama prototype. 
Dengan menggunakan prototype, property dan method bisa ditambahkan kapan saja.
*/
function Mobil(merk, tipe, harga) {
  this.merk = merk;
  this.tipe = tipe;
  this.harga = harga;
}

//Inilah cara menambahkan property menggunakan prototype object. Karena perintah ini,
//seluruh object Mobil akan memiliki property jumlahRoda.
Mobil.prototype.jumlahRoda = 4;

Mobil.prototype.hidupkan = function() {
  return "Mesin dijalankan";
};

Mobil.prototype.pergi = function(tempat) {
  return "Pergi ke" + tempat + " dgnan " + this.merk;
};

//membuat object
var mobilBudi = new Mobil("Daihatsu Xenia", "MPV", "20000000");
console.log(mobilBudi.hidupkan());
console.log(mobilBudi.pergi("Bandung"));
