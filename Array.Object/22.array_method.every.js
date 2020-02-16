// function genap(element) {
//   if (element % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// untuk mempersingka kode
function genap(element) {
  return element % 2 === 0;
}

var foo = [6, 8, 10, 12, 16];
console.log(foo.every(genap)); // true karena sumanya murupkan angka genap

var bar = [3, 8, 10, 12, 16];
console.log(bar.every(genap)); // false, karena ada angka 3 yang bukan merupakan angka genapno
