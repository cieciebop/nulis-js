// karena disertai argumen a,b maka function foo() sebagai local varible
function foo(a,b){
     a = 5; 
     b = 10;
    return (a+b);
}

var a = 1;
var b = 3;
var c = foo();

console.log(a);
console.log(b);
console.log(c);