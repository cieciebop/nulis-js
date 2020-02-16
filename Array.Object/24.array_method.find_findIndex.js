function genap(element) {
  return element % 2 === 0; // bisa juga (element % 2 === 0)
}

var foo = [5, 7, 14, 12, 16];

/*
Proses pengujian dimulai dari index pertama hingga terakhir. Apakah 5 % 2 === 0? tidak, 
lanjut ke element berikutnya. Apakah 7 % 2 === 0? juga tidak. Apakah 14 % 2 === 0? benar, 
function callback genap() akan mengembalikan nilai true dan method find() menghasilkan nilai 14.
*/
console.log(foo.find(genap));
/*
Begitu juga dengan perintah foo.findIndex(genap). 
Proses pencarian akan berhenti di angka 14, namun yang dikembalikan adalah index-nya,
 yakni index element foo ke 2.
 Proses yang sama juga berlaku untuk array bar.
*/
console.log(foo.findIndex(genap));

console.log('-------------------')
var bar = [99, 75, 17, 29, 88];
console.log(bar.find(genap));
console.log(bar.findIndex(genap));
