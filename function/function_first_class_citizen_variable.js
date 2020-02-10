var hitung = function rata2(a,b){
    return (a+b)/2;
}
// mempersingkat kode diatas
// var hitung = function rata2(a,b) { return (a + b)/2; };

console.log(hitung(4,8));
console.log(rata2(4,8)); // ini akan error
// karena itu javascript memboleh membuat kita menghapus rata2

// var hitung = function (a,b) { return (a + b)/2; };

// Hasilnya, variabel hitung seolah-olah menjadi function rata2() . Saya bisa memanggil function
// hitung(4,8) , yang sama artinya dengan rata2(4,8). dalam istilah pemrograman javascript ini disebut function Expressions
// ini akan sering dipakai untuk Javascript Object