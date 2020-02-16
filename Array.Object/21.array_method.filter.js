/*
Method filter() juga mirip seperti map(), yakni sama-sama menjalankan sebuah function callback. 
Bedanya pada method filter() hasil pemanggilan callback hanya bisa true atau false. Jika hasilnya true, 
pertahankan element array. Jika hasilnya false, hapus element tersebut.
*/
function genap(element) {
  if (element % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
var foo = [8, 4, 7, 9, 3, 2];
var bar = foo.filter(genap);
console.log(bar);
