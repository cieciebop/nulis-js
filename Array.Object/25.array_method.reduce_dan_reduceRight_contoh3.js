function bagi(total, angka) {
  return total / angka;
}
var foo = [49, 7, 2];
console.log(foo.reduce(bagi)); // 3.5
console.log(foo.reduceRight(bagi)); // 0.00058

/*
Hasil dari foo.reduce(bagi) akan berbeda dengan foo.reduceRight(bagi), kenapa?
Karena operasi pembagian akan menghasilkan nilai yang berbeda jika urutannya dibalik. 
Untuk perintah foo.reduce(bagi), yang akan diproses adalah = 49/7/2 = 7/2 = 3.5. 
Sedangkan perintah foo.reduceRight(bagi), yang akan diproses adalah = 2/7/49 = 0.28/49 = 0.0058.


*/
