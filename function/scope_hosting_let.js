var a = "Belajar javascript"; // karena ini glocal function bisa diakses dimana2

function foo(){
    console.log("a didalam function :"+a); // err ??
    let a = "Belajar Web Programming"; 
    
}

foo();
console.log("a diluar function: " + a);

/*
undefined ?? kenapa ?
jika sebelumnya undefined artinya tidak mengeluarkan error apapun 
dengan let:
akan muncul error justru ini baik karena kita bisa mendeteksi bug
*/