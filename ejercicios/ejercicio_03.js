// Sumar elementos de un arreglo usando función flecha
const sumarArreglo = numeros => numeros.reduce((total, num) => total + num, 0);

console.log(sumarArreglo([10, 40, 60, 90]));
