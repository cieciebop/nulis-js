function foo(apa){
    console.log(apa);
}

function salam(bar){ // 
    bar("selamat malam");
}

salam(foo); 

// Fungsi salam() di defenisikan menerima 1 argumen, yang ditampung oleh variabel bar . Pada
// saat fungsi salam(foo) dijalankan, fungsi foo akan diisi kedalam variabel bar . Di dalam fungsi
// salam() , variabel bar sama artinya dengan fungsi foo() . Dengan demikian, bar("Selamat
// Malam") sama artinya dengan foo("Selamat Malam") .
// Apa yang dijalankan dari foo("Selamat Malam") ? Ternyata fungsi foo() menerima 1 argumen,
// yang disimpan ke dalam variabel apa . Hasil fungsi ini adalah alert(apa) . Sehingga jika
// dipanggil foo("Selamat Malam") , akan dijalankan console.log("Selamat Malam") .