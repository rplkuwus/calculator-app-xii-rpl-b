//beat fungsi apenToDisplay
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//buat fungsi clearDisplay()
    function cleardisplay( value ) {
        document.getElementById('display').value = ''; //hapus
    }

    //buat fungsi calculateReslut(/perhitungan)
    function calculatorResult() {
        
            let experssion = document.getElementById('display').value
            .replace(/\^/g, '**') //ubah*menhjadi**untuk pangkat
            .replace(/\/\//g, '/'); //ubah tanda //menjadi /(bagi)

            let result = new Function('return ' + experssion)();
            if ( document.getElementById('display').value.includes('//')){
                result = Math.floor (result);//jika'//' digunakan,kita buat hasilnya jadi integer
            }
            document.getElementById('display').value = result;
        
    }

    //buat fungsi square() pankat
    function square () {
        let display = document.getElementById('display');
        display.value = Math.pow(parseFloat(display.value), 2);//fungsi matimatika bilangan pankat 2
    }

    //buat fungsi powerN() atau bilangan pangkat n
    function powerN(){
    let display = document.getElementById('display');
    display.value += '^'; //menambah simbol ^ agar bisa di jadikan sebagai pangkat
    }   
    //buat fungsi squarerot() atau kuadrat
    function squareRoot(){
        let display=document.getElementById('display');
        display.value=Math.sqrt(parseFloat(display.value)) ;//math.sqrt fungsi untuk matematika
    }

     //Buat fungsi persentage() atau fungsi persen
     function  percentage() {
         let display = document.getElementById('display');
         display.value = parseFloat(display.value)/100;
     }
     
     //buat fungsi modulus() atau mod
     function  modulus(){
         let display = document.getElementById('display');
         display.value += '%';//tanda '+=' artinya nilai dari display sebelumnya ditambahkan dengan nilai sekarang
     }

     //buat fungsi interdivision () atau Div (hasil bagi)
     function  integerDivision(){
         let display = document.getElementById('display');
         display.value +='//';//menambahkan "//" ke input display
     }