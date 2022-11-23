/*Crear un programa que determine si un número 
introducido en un popup es divisible por 11 y 5 o no, 
mostrar el resultado con console.log*/
let numero = prompt("ingrese numero")

if (numero % 11 == 0 && numero % 5 == 0) {
    console.log(numero + " es divisible")
}else{
    console.log(numero + " no es divisible")
}