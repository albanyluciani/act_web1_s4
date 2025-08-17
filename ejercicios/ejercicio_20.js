// Calcular promedio de un arreglo usando función flecha
const promedio = (arr) =>
  arr.reduce((total, num) => total + num, 0) / arr.length;

console.log(promedio([10, 20, 30])); // 20
