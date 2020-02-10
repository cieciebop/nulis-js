var mahasiswa = {
    nama : "Fulan",
    jurusan : "Sastra",
    ipk : {
        semester1:3.8,
        semester2:3.4,
        semester3:4

    },
    semester:4,
};

console.log(mahasiswa.ipk.semester1); // 3.8
console.log(mahasiswa.ipk.semester3); // 4

/*
Penulisan mahasiswa.ipk.semester1 , artinya saya ingin mengakses nilai property semester1
yang berada di dalam object ipk , dimana object ipk ini juga merupakan bagian dari object
mahasiswa .
Nested object nantinya akan sering kita jumpai pada saat masuk ke materi tentang DOM
(Document Object Model). Beriktu salah satu contohnya:
var header = window.document.getElementById("header");

*/