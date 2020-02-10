var foo = ["a", "b", "c", "d", "e"];

foo.forEach(function(element, index, array) {
  console.log("Index ke-" + index + " = " + element);
  console.log(array);
});
