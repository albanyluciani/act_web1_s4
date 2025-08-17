// Sumar elementos de un arreglo usando función flecha

const sumarArreglo = (arreglo) => {
  let suma = 0;
  let i = 0;

  while (i < arreglo.length) {
    suma += arreglo[i];
    i++;
  }
  return suma;
};

console.log(sumarArreglo([4, 8, 9, 6, 9]));
