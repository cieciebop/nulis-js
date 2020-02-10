function rata2(){
    var totalArg = arguments.length;
    var hasil = 0;
    for (var i=0; i < totalArg;i++){
        hasil = hasil + arguments[i];
    }
    return hasil/totalArg;
    

}
var a = rata2(1, 9);

console.log(a); // 5

var b = rata2(4, 8, 3, 7);
console.log(b); // 5.5

var c = rata2(14, 34, 17, 55, 98, 22, 26);
console.log(c); // 38