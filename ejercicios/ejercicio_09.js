// Crear un contador privado usando IIFE con closure

function crearContador() {
  let contador = 0;
  return function () {
    return contador++;
  };
}

const contador1 = crearContador();
console.log(contador1()); // 0

console.log(contador1()); // 1
console.log(contador1()); // 1
console.log(contador1()); // 1
console.log(contador1()); // 1
