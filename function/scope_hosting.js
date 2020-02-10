var a = "Belajar javascript"; // karena ini glocal function bisa diakses dimana2

function foo(){
    console.log("a didalam function :"+a);
}

foo();
console.log("a diluar function: " + a);