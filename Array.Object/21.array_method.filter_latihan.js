function besar30(element) {
  if (element > 30) {
    return true;
  } else {
    return false;
  }
}

var foo = [20, 60, 44, 12, 34];
var bar = foo.filter(besar30);
console.log(bar);
