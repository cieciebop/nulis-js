function tampil(element, index) {
  console.log("index ke-" + index + " = " + element);
}

var foo = ["a", "b", "c", "d", "e"];
foo.forEach(tampil);

var bar = ["zulkifli", "andi", "erik", "joko", "dina"];
bar.forEach(tampil);
