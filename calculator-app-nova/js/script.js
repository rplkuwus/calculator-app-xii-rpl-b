//buat fungsi appendTODisplay()
function appentodisplay(value) {
    document.getElementById ('display').value +=value;
}

 //buat fungsi clearDisplay()   
 function cleardisplay(value) {
     document.getElementById('display').value='';//hapus
 }
 //buat fungsi calculateResult()/perhitungan
 function calculatorresult() {
     try {
         let expression=document.getElementById('display').value
         .replace(/\^/g,'**')//ubah*menjadi**untuk pangkat
         .replace(/\/\//g,  '/');//ubah tanda//menjadi/(bagi)
 
      let result=new Function('return ' + expression)();
      if (document.getElementById('display').value.includes('//')) {
          result=Math.floor(result);//jika'//'digunakan,kita buat hasilnya jadi int
      }
      document.getElementById('display').value=result;
    } catch (error)  { // jika error
     document.getElementById('display').value = 'Error';
 
    }  
 }                         
     //buat fungsi square()pangkat
     function square() {
        let display=document.getElementById('display');
        display.value= Math.pow(parseFloat(display.value), 2);//fungsi matematika bilangan pangkat 2
     }
   //buat fungsi powerN()atau bilangan pangkat n
   function powerN(){
       let display=document.getElementById('display');
       display.value+='^';//menambahkan simbol ^agar bisa dijadikan sebagai pangkat
   }
   //buat fungsi squaReroot()atau kuadrat
   function squareroot(){
       let display=document.getElementById('display');
       display.value = Math.sqrt(parseFloat(display.value));//math.sqrt adalah fungsi matematika akar kuadrat
   }
   //buat fungsi persentage()atau fungsi persen
   function percentage(){
       let display=document.getElementById('display');
       display.value= parseFloat(display.value)/100;
   }
   //fungsi modulus()atau fungsi mod (sisa hasil bagi)
   function modulus(){
       let display=document.getElementById('display');
       display.value+='%';//tanda '+='artinya nilai dari displaysebelumnya dengan nilai
   }
   //buat fungsi integerDivision()atau DIV(hasil bagi)
   function integerdivision(){
       let display=document.getElementById('display')
       display.value+='//';//menambahkan '//'ke input display
   }

    
     
 