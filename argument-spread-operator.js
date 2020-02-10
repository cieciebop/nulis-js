// Spread operator (...) merupakan fitur baru di ECMAScript 6. Fungsi pertamanya sudah kita
// bahas di bab tentang operator, yakni untuk menggabungkan array. Fungsi lain dari operator ini
// adalah menggantikan peran arguments object.



function angka(...arg){
    // ..arg bisa diganti dengan kalimat lain ...foo dll
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
    console.log(arg[4]);

}
angka(4,4,3,6,5,6,7)