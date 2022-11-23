/*Determinar si una palabra empieza con mayúscula o no.*/
let letra = prompt('ingrese texto')

function esMayuscula(letra){
    return letra === letra.toUpperCase();
}

function esMinuscula(letra){
    return letra === letra.toLowerCase();
}

/*if(esMayuscula(letra[0])){
    alert("es mayuscula")
}else{
    alert("no es mayuscula")
}*/

let resultado = esMayuscula (letra[0]) ? 'es mayuscula' : 'es minuscula'
alert(resultado)