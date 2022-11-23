/*Crear un programa donde se introduzcan los tres ángulos internos de un 
triángulo y se determine si el triángulo es válido o no.*/
let angulo1 = parseInt (prompt("ingrese valor"))
let angulo2 = parseInt (prompt("ingrese valor2"))
let angulo3 = parseInt (prompt("ingrese valor3"))

/*angulo1 = parseInt(angulo1)
angulo2 = parseInt(angulo2)
angulo3 = parseInt(angulo3)

if(angulo1 + angulo2 > angulo3 && angulo2 + angulo3 > angulo1 && angulo1 + angulo3 > angulo2) {
    alert("es un triangulo")
}else{
    alert("no es un triangulo")
}*/

if (angulo1 + angulo2 + angulo3 === 180){
    alert("es un triangulo")
}else{
    alert("no es un triangulo")
}