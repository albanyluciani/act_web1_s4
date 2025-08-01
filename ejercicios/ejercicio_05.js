// Contar vocales en una cadena usando función recursiva
function contarVocales(cadena) {
  if (cadena.length === 0) return 0;
  const vocales = "aeiouyAEIOUY";
  const esVocal = vocales.includes(cadena[0]);
  return (esVocal ? 1 : 0) + contarVocales(cadena.slice(1));
}

console.log(contarVocales("Albany"));
