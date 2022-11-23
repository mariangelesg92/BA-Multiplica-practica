/*Crear un programa que le pida al usuario dos 
números en un Prompt y luego muestre en un alerta el 
número mayor.*/

let numero = prompt("ingrese numero")
let numero2 = prompt("ingrese otro numero")

if (numero > numero2){
    alert(numero + " es mayor a " + numero2)
}else {
    alert(numero2 + " es mayor a " + numero)
}