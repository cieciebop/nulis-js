// callback function
function halo(nama) {
  console.log("Halo, ${nama}");
}
function tampilkanPesan(callback) {
  const namanya = halo("fulan");
  callback(namanya);
}

console.log(namanya);
