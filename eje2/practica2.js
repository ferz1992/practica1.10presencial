const UNIDAD_BITCOIN_VALOR_ETHEREUM = 13.540;
const UNIDAD_BITCOIN_UNIDAD_DOLAR =  39685.40;

let valorIngresado = 1;
let etheriumResultado = 0;


function resultado() {
    valorIngresado=document.querySelector('#valor_ingresado').value;
    document.querySelector('#resultado_etherium').innerHTML = "<h2>etherium:"+valorIngresado*UNIDAD_BITCOIN_VALOR_ETHEREUM+"</h2>"
    
}
function dolar() {

    valorIngresado=document.querySelector('#valor_ingresado').value;
    document.querySelector('#resultado_dolar').innerHTML = "<h2>dolar:"+valorIngresado*UNIDAD_BITCOIN_UNIDAD_DOLAR+"</h2>"
}
