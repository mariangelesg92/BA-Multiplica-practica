let numero = prompt("Ingrese numero")

function esNumeroDeLaSuerte(numero) {
    if (numero != 15){
        if (numero > 0){
            if (numero % 2 == 0 || numero % 3 == 0){
                alert(numero + " es numero de la suerte")
            }
        }
    }else {
        alert(numero + " no es numero de la suerte")
    }
}

esNumeroDeLaSuerte(numero)