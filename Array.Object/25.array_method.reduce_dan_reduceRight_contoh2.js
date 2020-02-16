function pangkat2(total, angka) {
  return total + Math.pow(angka, 2);
}

var foo = [5, 7, 14];
console.log(foo.reduce(pangkat2)); // 250
console.log(foo.reduce(pangkat2, 0)); // 270

console.log(foo.reduceRight(pangkat2)); // 250
console.log(foo.reduceRight(pangkat2, 0)); //270
