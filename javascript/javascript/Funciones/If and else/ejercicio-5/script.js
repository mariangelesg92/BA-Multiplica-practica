/*Crear un programa que le pida al usuario primero un 
números al usuario a través de un prompt y luego un 
segundo número para luego mostrar en un alerta el número mayor, 
esta vez realizar el ejercicio ocupando un if ternario.*/
let numero = prompt("ingrese numero")
let numero2 = prompt("ingrese otro numero")

let resultado = numero > numero2 ? numero : numero2
alert(resultado + " es el mayor")