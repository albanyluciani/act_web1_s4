// Invertir una cadena usando función recursiva

function invertir(cadena) {
  if (cadena === "") return "";
  return invertir(cadena.slice(1)) + cadena[0];
}

console.log(invertir("albany"));
