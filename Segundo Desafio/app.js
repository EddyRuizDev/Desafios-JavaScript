

let año = prompt("¿Que año es? Ingrese el año: ");
let mes = prompt("¿Que mes es? Ingrese un numero del 1 al 12: ");
let  dia = prompt("¿Que dia es? Ingrese un numero del 1 al 31: ");


if((mes <1 || mes>12) || (dia<1 || dia>31) )
{
    window.alert("Error,no se puede continuar por favor ingrese un numero del 1 al 12 para el mes y del 1 al 31 para el dia") 
    
}

else{
    window.alert("La fecha Ingresada es: " +dia+ "/" +mes+ "/" + año);
}