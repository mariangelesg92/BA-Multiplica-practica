let dia = new Date().getDay();
console.log(dia)

switch (dia) {
    case 1:
        console.log("hoy es lunes")
    break;

    case 2:
        console.log("hoy es martes")
    break;

    case 3:
        console.log("hoy es miercoles")
    break;

    case 4:
        console.log("hoy es jueves")
    break;

    case 5:
        console.log("hoy es viernes")
    break;

    case 6:
        console.log("hoy es sabado")
    break;

    case 0:
        console.log("hoy es domingo")
    break;

    default:
        console.log("no existe el dia")
}