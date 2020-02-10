var Mahasiswa = {
    nama : "Andi",
    jurusan : "Informasi",
    ipk : 4,
    semster: 5,
}


console.log(Mahasiswa.nama);
Mahasiswa.nama = "Joko";
console.log(Mahasiswa.nama);

console.log(Mahasiswa['ipk']);
Mahasiswa["ipk"] = 3.3;
console.log(Mahasiswa['ipk']);