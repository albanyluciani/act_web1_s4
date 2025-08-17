// Validar correo electrónico básico usando declaración de función
function esCorreo(cadena) {
  return cadena.includes("@") && cadena.endsWith(".com");
}

console.log(esCorreo("test@example.com")); // true
console.log(esCorreo("test@ejemplo.org")); // false
