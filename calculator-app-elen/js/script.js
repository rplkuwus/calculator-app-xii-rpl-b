//buat fungsi appedDisplay()
function appendToDisplay(value) {
    document.getElementById('display').value += value;

}

//buat fungsi ClearDisplay()
function clearDisplay(value) {
    document.getElementById('display').value = ''; //hapus

}

//buat fungsi calculateResult()/ perhitungan
function calculateResult () {
   try {
       let expression = document.getElementById('display').value
       .replace(/\^/g, '**') // ubah * menjadi ** untuk pangkat
       .replace(/\/\//g, '/') // ubah tanda // menjadi/(bagi)

       let result = new Function('return ' + expression)();
       if(document.getElementById('display').value.includes ('//')) {
           result =  Math.floor (result); //jika '//'diginakan,kita buat hasilnya jadi integer
       }
        document.getElementById('display').value = result;

       } catch { //jika error
        document.getElementById('display').value = 'Error';
   }
}

//buat fungsi square () pangkat
function square () {
    let display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2); //fungsi matematika bilangan pangkat 2
}

// buat funfsi powerN() atau fungsi persen
function powerN() {
    let display = document.getElementById('display');
    display.value +='^'; // menambahkan simbol agar bisa di jadikan sebagai pangkat

}

//buat fungsi squareRoot() atau akar kuadrat
function squareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value)); //math.sqrt adalah fungsi matematika akar kuadrat
}

//buat fungsi persentage() atau fungsi persen
function percentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value)/100
}

//buat funfsi modulus() atau mod(siswa hasil bagi)
function modulus() {
    let display = document.getElementById('display');
    display.value +='%'; // tanda '+' artinya nilai dari display sebelumnya ditambahkan nilai yang sekarang
}

//buat fungsi integerDivision() atau div (hasil bagi)
function integerDivision() {
    let display = document.getElementById('display');
    display.value +='//' // menambahkan // ke imput display
}
