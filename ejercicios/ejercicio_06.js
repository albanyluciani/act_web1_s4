// Filtrar números mayores a 10 usando función de orden superior
function filtrarMayores(arr) {
  return arr.filter(function (num) {
    return num > 10;
  });
}

console.log(filtrarMayores([9, 12, 30, 15]));
