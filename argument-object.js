// Arguments object adalah sebutan untuk ‘object’ yang menampung seluruh argument pada saat
// pemanggilan function. Arguments object sebenarnya lebih mirip seperti array. Oleh karena itu
// boleh dibilang bahwa kita sedang membahas tentang array khusus bernama arguments.

function angka(){
    totalArg = arguments.length;
    return totalArg
}

var a = angka(1,9);
console.log(a);

var b = angka(4,5,5,9,10);
console.log(b);

var c= angka(5,49,45,49,4,48);
console.log(c);