//Determinar si un año dado es bisiesto.

const esBisiesto = (year) => {
    return (year % 400 == 0) ? true :
           (year % 100 == 0) ? false:
            year % 4 == 0;

};