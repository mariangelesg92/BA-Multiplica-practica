/*Crear un programa que determine si un número
introducido en un Prompt es par o no, 
la respuesta será mostrada en una alerta.*/

let numero = prompt("ingrese numero")

if (numero % 2 == 0){
    alert(numero + " es par")
}else{
    alert(numero + " es impar")
}