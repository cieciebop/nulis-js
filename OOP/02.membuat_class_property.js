class Mobil {
  //Method constructor ini otomatis akan berjalan saat proses pembuatan object (saat proses instantiation).
  constructor() {
    // This adalah object khusus sebagai pengganti object yang nantinya di buat dari class Mobil
    this.merk = "Daihatsu Xenia";
    this.tipe = "MPV";
    this.harga = "140000000";
  }
}

var mobilAndi = new Mobil();
console.log(mobilAndi.merk);

var mobilJoko = new Mobil();
console.log(mobilJoko.tipe);

var mobilSandi = new Mobil();
console.log(mobilSandi.merk);
