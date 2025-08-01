// Sumar elementos de un arreglo
function sumarElementos(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarElementos(10, 40, 60, 90));
