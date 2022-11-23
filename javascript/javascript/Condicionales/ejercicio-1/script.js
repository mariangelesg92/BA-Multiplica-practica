let valor1 = prompt("ingrese un valor")
let valor2 = prompt("ingrese un segundo valor")

if (valor1 > valor2) {
    alert(valor1 + " es mayor a " + valor2)
} else if (valor2 > valor1) {
    alert(valor2 + " es mayor a " + valor1)
}else {
    alert(valor1 + " es igual a " + valor2)
}