/*Crear un programa que determine si un número 
introducido en un Prompt es divisible por 5 o no, 
mostrar el resultado con console.log*/
let numero = prompt("ingrese numero")

if (numero % 5 == 0){
    console.log(numero + " es divisible")
}else{
    console.log(numero + " no es divisible")
}