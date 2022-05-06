let numUno=1;
let numDos=2;
let numTres=3;

function sorteo(){
   numUno=document.querySelector('#numero_primero').value;
   numDos=document.querySelector('#numero_segundo').value;
   numTres= document.querySelector('#numero_tercero').value;

    
if ((numUno==numDos) && (numDos==numTres))  { 
    
    console.log("bingo");

}
else if ((numUno==numDos)|| (numDos==numTres)||(numTres==numUno))
{
   console.log("segundo puesto");
}
else {
    console.log("helado gratis");
}

}
sorteo();