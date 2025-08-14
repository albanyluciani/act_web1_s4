// Reemplazar espacios por guiones usando expresión de función

const reemplazarEspacios = function (cadena) {
  return cadena.replace(/ /g, "-");
};

console.log(reemplazarEspacios("Hola Mundo"));
