# Object

## Cara Mengakses object

### Javascript menyimpan property & method Object di '4 tempat':

1. Object Property
   sebutan untuk 'sesuatu' yang melekat langsung ke object. Istilah lainnya disebut dengan static property
   contoh:

   - untuk mencari tau nilai maximum yang bisa disimpan dijavascript
     bisa diakses dengan property Number.MAX_VALUE

2. Object Method
   sebutan untuk 'sesuatu' yang melekat langsung ke object. Istilah lainnya disebut dengan static method
   contoh:

   - untuk mengecek apakah sebuath variabel berisi angka bulat atau tidak dengan
     Number.isInteger()

3. Object instance property
   Sebutan untuk 'sesuatu' yang melekat ke instance object.

   Untuk Object instance property, contohnya seperti property length dari sebuah string:

   '''javascript
   var foo = new String("Selamat Belajar Javascript");
   console.log(foo.length)
   '''
   Disini, property length melekat ke hasil instance dari Object String. Bukan ke object String-nya langsung.

4) Object instance method
   Sebutan untuk 'sesuatu' yang melekat ke instance object.

   '''javascript
   var foo = new Number(5.123456);
   console.log(foo.ToPrecision(3)); //5.12
   '''

   Perhatikan bahwa method toPrecision() melekat ke variabel foo, yang merupakan hasil in- stance dari Object Number, bukan diakses langsung dari Number. Disini method toPrecision() termasuk ke dalam kelompok Object instance method.
   Untuk Object instance property, contohnya seperti property length dari sebuah string:
