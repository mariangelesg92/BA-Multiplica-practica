/*Crear un programa que determine si un string introducido 
por un usuario empieza con un número o con una letra.*/
let valor = prompt("ingrese valor")
let numeros = ['0','1','2','3','4','5','6','7','8','9']

if (numeros.includes(valor[0])){
    alert("numero")
}else{
    alert("letra")
}

/*alert(typeof 34)
alert(typeof '34')*/
