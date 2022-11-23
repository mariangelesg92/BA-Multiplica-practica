//Ejercio array+prompt
let lista = ["pan","queso","leche","galletitas","gaseosa"]
let articulo = prompt("agregar articulo")

if (lista.includes(articulo)){
    console.log(articulo + " ya se encuentra en la lista")
}else{
    lista.push(articulo)
    console.log(articulo + " se agrego a la lista")
}
console.log(lista)
lista.pop()
console.log(lista)