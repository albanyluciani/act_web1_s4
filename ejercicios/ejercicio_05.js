//Contar vocales en una cadena
function contadorVocales() {
  let contador = 0;
  return function () {
    return contador++;
  };
}

const contador1 = contadorVocales();
console.log(contador1()); // 0
console.log(contador1()); // 1
