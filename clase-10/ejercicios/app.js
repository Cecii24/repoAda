/* Años perro

const edad = prompt('Qué edad tienes?');
const añosPerro = 7;
const resultados = edad * añosPerro ;
alert('tu edad en años perro es ' + resultados); // Concatenación //
alert(`tu edad en años perro es ${resultados}!!!`); // Template String //

*/

// ----------------------------------------------------------------------------------------------------- //

/*

Saludo

const nombre = prompt('Ingresa tu nombre');
const apellido = prompt('Ingresa tu apellido');
const resultados = `Hola ${nombre} ${apellido}, bienvenida a Ada`;
alert(resultados);



Heladería

const gusto1 = prompt('Ingresa un gusto de helado');
const gusto2 = prompt('Ingresa otro sabor');
const gusto3 = prompt('Ingresa el último sabor');
const resultado = `Aquí tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`;
alert(resultado);



Datos personales

const nombre = prompt('Ingresa tu nombre');
const apellido = prompt('Ingresa tu apellido');
const edad = prompt('Ingresa tu edad');
const nacionalidad = prompt('Ingresa tu nacionalidad');
const documento = prompt('Ingresa tu número de documento');
const resultados = `Nuevo usuario agregado al sistema: ${nombre}, ${apellido}, ${edad}, ${nacionalidad}, ${documento}`;
alert(resultados);



Lista de reproducción

const nombrePlaylist = prompt('Ingresa el nombre de tu playlist');
const cancion1 = prompt('Ingresa el nombre de la primer canción');
const cancion2 = prompt('Ingresa el nombre de la segunda canción');
const cancion3 = prompt('Ingresa el nombre de la última canción');
const resultados = `Se ha creado la playlist ${nombrePlaylist} con las canciones: ${cancion1}, ${cancion2}, ${cancion3}`;
alert(resultados);



Dirección completa

const calle = prompt('Ingresa tu calle');
const numero = prompt('Ingresa tu número');
const departamento = prompt('Ingresa tu departamento');
const codigoPostal = prompt('Ingresa tu código postal');
const ciudad = prompt('Ingresa tu ciudad');
const pais = prompt('Ingresa tu país');
const resultado = `La dirección que ha ingresado es: ${calle}, ${numero}, ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`;
alert(resultado);



Minutos a segundos

const minutos = prompt('Ingresa los minutos a convertir en segundos');
const segundos = minutos * 60;
const resultado = `${minutos} minutos equivalen a ${segundos} segundos`;
alert(resultado);



Días a segundos

const dias = prompt('Ingresa los días a convertir en segundos');
const segundos = dias * 86400;
const resultado = `${dias} días equivalen a ${segundos} segundos`;
alert(resultado);



Área de un triangulo

const valorBase = prompt('Ingresa el valor de la base de un triángulo');
const valorAltura = prompt('Ingresa el valor de la altura del triángulo');
let resultado = (valorBase * valorAltura) / 2;
alert(resultado);



Perímetro de un rectángulo

const valorAltura = prompt('Ingresa el valor de la altura del rectángulo');
const valorAncho = prompt('Ahora ingresa su ancho');
let resultado = (parseInt(valorAltura) + parseInt(valorAncho));
alert(resultado);



Porcentaje

const numero = prompt('Ingresa un número para obtener su porcentaje');
const porcentaje = prompt('Ingresa el porcentaje que se desea obtener');
let resultado = (numero * porcentaje) / 100;
alert(resultado);



Tiempo de viaje

let aPie = 5;
let bicicleta = 15;
let auto = 100;
let tren = 200;

const distancia = prompt('Ingresa la distancia de tu recorrido');
let camina = distancia / aPie;
let bici = distancia / bicicleta;
let maneja = distancia / auto;
let transporte = distancia / tren;

let resultado = `Si fuera caminando tardaría ${camina} horas, en bicicleta ${bici}, en auto ${maneja} y en tren ${tren}`;
alert(resultado);


*/


// Duración vuelo

// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo,
// y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración 
// y la duración total del vuelo.


const escala1 = prompt('Ingresa el primer destino de la escala');
const duracion1 = prompt('Ingresa la duración del mismo');
const escala2 = prompt('Ingresa el segundo destino');
const duracion2 = prompt('Ingresa la duración del mismo');
const escala3 = prompt('Ingresa el último destino');
const duracion3 = prompt('Ingresa la duración del mismo');

let total = (parseInt(duracion1) + parseInt(duracion2) + parseInt(duracion3));
let resultado = `El tiempo total de vuelo es: ${total} horas`;
alert(resultado);