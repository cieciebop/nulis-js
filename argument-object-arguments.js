// Arguments object adalah sebutan untuk ‘object’ yang menampung seluruh argument pada saat
// pemanggilan function. Arguments object sebenarnya lebih mirip seperti array. Oleh karena itu
// boleh dibilang bahwa kita sedang membahas tentang array khusus bernama arguments.

function angka(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    }
angka(4, 8, 3, 7);