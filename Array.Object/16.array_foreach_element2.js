/*

argument element di dalam callback berisi element array yang saat ini sedang di proses. 
Dan nama argumen ini sebenarnya bisa menggunakan nama variabel apa saja, seperti berikut:
*/
var foo = ["a", "b", "c", "d", "e"];

foo.forEach(function(a) {
  console.log(a);
});
