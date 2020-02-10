var mahasiswa = {
  nama: "Andi",
  jurusan: "Ekonomi Manajemen"
};

// yang dikirim kedalam mahasiswaBaru bukan nilai, tetapi referensi(reference), dikenal dengan istilah
// assignment by reference
var mahasiswaBaru = mahasiswa;

console.log(mahasiswa.nama); // Andi
console.log(mahasiswaBaru.nama); // Andi

mahasiswaBaru.nama = "Jojo";

console.log(mahasiswaBaru.nama);
console.log(mahasiswa.nama);

mahasiswaBaru.jurusan = "Teknik Informastika";

console.log(mahasiswa.jurusan);
console.log(mahasiswaBaru.jurusan);

console.log(mahasiswaBaru.nama);
