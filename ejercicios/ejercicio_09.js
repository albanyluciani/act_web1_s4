// Crear un contador privado usando IIFE con closure
const contador = (function () {
  let cuenta = 0;
  return function () {
    return cuenta++;
  };
})();

console.log(contador()); // 0
console.log(contador()); // 1
