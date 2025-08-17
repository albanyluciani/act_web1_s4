// Crear un contador privado usando IIFE con closure

function crearContador() {
  let contador = 0;
  return function () {
    return contador++;
  };
}

const contador = crearContador();
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
