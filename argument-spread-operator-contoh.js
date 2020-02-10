function rata2(...semuaArg){
    var totalArg = semuaArg.length;
    var hasil = 0;
    for (var i of semuaArg){
    hasil = hasil + i;
    }
    return hasil/totalArg;
    }
    var a = rata2(1, 9);
    console.log(a); // 5
    var b = rata2(4, 8, 3, 7);
    console.log(b); // 5.5
    var c = rata2(14, 34, 17, 55, 98, 22, 26);
    console.log(c);