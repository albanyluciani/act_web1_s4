//Tarea: Crea una función que reciba un arreglo y devuelva solo los números mayores a 10.
//Tipo de función: Función de orden superior
//Ejemplo: filtrarMayores([5, 12, 8, 15]) → [12, 15]

const filtrarMayores = (arreglo) => arreglo.filter((num) => num > 10);
console.log(filtrarMayores([2, 5, 22, 13, 7, 45]));
