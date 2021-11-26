// Comentario de una línea //

/* Comentario de 
    varias líneas
*/

let nombre = 'Cecilia';

console.log('Muestra el nombre', nombre);

let nombreEstudiante = 'Ada Lovelace';
let saludo = 'Hola querida ';
console.log(saludo + nombreEstudiante);

let edad = 30;
let temperatura = 20;
console.log(edad, temperatura);

let prendido = true;
let casado = false;
let puedeVotar = true;
console.log(puedeVotar);

let perrito;  // Undefined //
console.log(perrito);

console.log(typeof perrito);
console.log(typeof edad);


let dos = 2;
let cinco = 5;
let ocho = 8;

console.log(cinco * dos + ocho);


// ---------------------------------- //

const nombreUsuario = prompt('¿Cuál es tu nombre?');
const edadUsuario = prompt('¿Cuál es tu edad?');

console.log(nombreUsuario);

const despedida = `Adiós, ${nombreUsuario} vuelve pronto`;
alert(despedida);

