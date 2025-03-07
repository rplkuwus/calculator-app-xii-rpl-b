//buat fungsi appendToDisplay ()
function appendToDisplay(value) {
   document.getElementById('display').value +=value;
} 
    


 //buat fungsi clearDisplay()
 function clearDisplay(value){
    document.getElementById('display').value = ''; //hapus

 }


 //buat fungsi calculateResul()/perhitungan
 function calculateResult() {
   try {
    let expression =document.getElementById('display').value
    .replace(/\^/g, '**')// ubah * menjadi ** untuk pangkat
    .replace(/\/\//g,'/');//ubah tanda //menjadi(bagi)


    let result = new Function('return '+ expression)();
    if (document.getElementById ('display').value.includes('//')) {
        result = Math.floor(result); // jika '//' digunakan, kita buat hasilnya  jadi integer
    }
    document.getElementById('display').value = result;

   } catch { // jika error
      document.getElementById('display').value = 'error';
   }
   
}

   // buat fungsi square() pangkat
   function square() {
      let display = document.getElementById('display');
      display.value = Math.pow(parseFloat(display.value),2); //fungsi matematika bilangan pangkat 2
   }


// buat fungsi powerN() atau bilangan pangakat n
function powerN() {
   let display = document.getElementById('display');
   display.value += '^'; // menambahkan simbol ^ agar bisa dijadikan sebagai pangkat
}

// buat fungsi squareRoot() atau kuadrat
function squareRoot() {
   let display = document.getElementById('display');
   display.value = Math.sqrt(parseFloat(display.value)); // Math.sqrt adalah fungsi matematika akar kuadrat
}

//buat fungsi percentage() atau fungsi persen
function percentage() {
   let display = document.getElementById('display');
   display.value = parseFloat(display.value)/100;
}

//buat fungsi modulus() atau funsi mod ( sisa hasil bagi)
function modulus() {
   let display = document.getElementById('display');
   display.value += '%'; // tanda '+=' artinya nialai dari display sebelumnya ditambahkan dengan nilai sekarang
}

// buat fungsi integerDivision() atau Div ( hasil bagi)
function integerDivision() {
   let display = document.getElementById('display');
   display.value += '//'; // menambahkan "//" ke input display 
}