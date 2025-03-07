//buat fungsi appenDisplay()
function appendToDisplay(value){
document.getElementById('display').value += value;

}

//buat fungsi clearDisplay()
function clearDisplay(value){
  document.getElementById('display').value = ''; //hapus

}


//buatfungsi calculaterResult()/perhitungan
function calculateResult(){
  
 let expression = document.getElementById('display').value
 .replace(/\^/g,'**')//ubah * menjadi ** untuk pangkat
 .replace(/\/\//g, '/'); // ubah tanda // menjadi(bagi)

 let result =new Function ('return '+ expression)();
 if (document.getElementById('display') .value.includes('//')){
  result = Math.floor (result);//jika '//'digunakan,kita buat hasilnya jadi integer            
 }
 document.getElementById('display').value= result;



}


//buat fungsi square() pangkat
function square(){
  let display =document.getElementById('display');
  display.value = Math.pow(parseFloat(display.value), 2);//fungsi matematika bilangan pangkat 2

}

//  buat fungsi powerN()atau bilangan pangkat n
function powerN () {
  let display = document.getElementById('display');
  display.value += '^';//menambahkan simbol ^ agar bisa sebagai pangkat

}

//buat fundsi squareRoot() atau akar kuadrat
function squareRoot() {
  let display = document.getElementById('display');
  display.value = Math.sqrt(parseFloat(display.value));//math.sqrt adalah fungsi matematika akar kuadrat
}

// buat fungsi percentage()atau fungsi persen
function percentage(){
  let display = document.getElementById('display');
  display.value =parseFloat(display.value)/100;
}

// buat fungsi modulus()atau fungsi mod(sisa hasil bagi)
function modulus() {
  let display = document.getElementById('display');
  display.value +='%'; // tanda '+=' artinya nilai dari display sebelumnya di tambahkan nilai yang sekarang

}

//buat fungsi integerDIvision()atau div (hasil bagi)
function integerDIvision() {
  let display = document.getElementById('display');
  display.value +='//'; // menambahkan '//' ke input display
}

