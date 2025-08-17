// Multiplicar elementos de un arreglo usando función de orden superior

function multiplicarArreglo(arreglo) {
  return arreglo.reduce(function (total, num) {
    return total * num;
  }, 1);
}

console.log(multiplicarArreglo([2, 3, 4]));
