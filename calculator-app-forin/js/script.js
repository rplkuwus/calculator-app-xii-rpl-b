//Buat fungsi appendToDisplay()
function appendToDisplay( value ) {
    document.getElementById('display').value += value;
}

//Buat fungsi clearDisplay()
function clearDisplay( value ) {
    document.getElementById('display').value = ''; //hapus
}

//but fungsi calculateResult()/ perhitungan
function calculateResult() {
    try {
        let expression = document.getElementById('display').value
        .replace(/\^/g, '**')//ubah * Menjdui ** untuk pangkat
        .replace(/\/\//g, '/'); //ubah tanda // menjadi /(bagi)

        let result = new Function ('return ' + expression)();
        if (document.getElementById('display').value.includes('//')) {
            result = Math.floor (result); //jika '//' digunakan, kita buat hasilnya jadi integer
        }
        document.getElementById('display').value = result;

    } catch { // jika error
        document.getElementById('display').value = 'Error';
    }
}

// buat fungsi square () pangkat
function square () {
    let display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2); // fungsi  matemtika bilangan pangkat 2
}

// buat fungsi powerN() atau bilangan n
function powerN () {
    let display = document.getElementById('display');
    display.value += '^'; // menmbahkan simbol ^ agar bilngan dijadikan sebagai pangkat
}

//fungsi squareRoot() atau kuadrat
function squareRoot () {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));//Math.sqrt adalah fungsi Matematika akar kuadrat
}

//buat fungsi persentage() atau fungsi persen 
function precentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value)/100;
}

// buat fungsi modulus() atau fungsi MOD (sisa hsil bagi)
function modulus() {
    let display = document.getElementById('display');
    display.value += '%' //tanda  '+=' artinya nilai dari display sebelumnya
}

// buat fungsi integerDIvisio() atau Div (hasil bagi)
function integerDIvisio() {
    let display = document.getElementById('display');
    display.value += '//'; // Menambahkan "//" ke input display
}