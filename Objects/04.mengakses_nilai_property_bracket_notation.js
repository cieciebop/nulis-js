/*
mengkases nilai property dengan bracket notasi {}. ini yang biasa umum dan sering digunakan 

catatan:
- pada dasarnya nama property object di proses javascript sebagai semua string
- Property yang tidak umum (spasi, number) tetap bisa diakses
- dengan bracket notation kita bisa membuat nama property yang tidak memenuhi syarat identifier bisa diakse walaupun penulisan 
nama property tanpa identifier sangat tidak disaran
contoh:
namasiswa, NamaSiswa, nama_siswa = nama property yang sesuai dengan identifier
nama siswa = ini tidak sesuai dengan kaidah identifier tetapi dengan bracket notation bisa diakses nilainay

var Murid = {
    nama siswa = "Fulan",
    alamat lengkat = "Jl. Pegangsaaan timur Raya Blog III",
}
// menggunakan dot_notation akan error
console.log(Murid.nama siswa) // error
// menggunakan bracket notation
console.log(Murid["nama lengkap"]) // Fulan


*/

var Mahasiswa = {
    nama : "Andi",
    jurusan : "Sistem Informasi",
    ipk : 3.45,
    semester : 4,
}

console.log( Mahasiswa["nama"]);
console.log( Mahasiswa["jurusan"]);
console.log( Mahasiswa["ipk"]);
console.log( Mahasiswa["semester"]);