var a = "Belajar javascript"; // karena ini glocal function bisa diakses dimana2

function foo(){
    console.log("a didalam function :"+a); // undefined ??
    var a = "Belajar Web Programming"; 
    
}

foo();
console.log("a diluar function: " + a);

/*
undefined ?? kenapa ?
ini artinya ada bug tetapi javascript tidak mengeluarkan error apapun
*/