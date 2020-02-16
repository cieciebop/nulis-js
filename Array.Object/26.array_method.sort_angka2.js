// memperbaiki function bandingkan angka sebelumya

function bandingkan(a, b) {
  return a - b;
}

var foo = [3, 5, 2, 8, 1, 31, 22, 44, 33, 11];
foo.sort(bandingkan);
console.log(foo);
