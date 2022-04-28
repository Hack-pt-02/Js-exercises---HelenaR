console.log("¡Empezamos con javascript!");
console.log("Hola soy un estudiante Hackademy");
let vacaciones="En Hawai";
console.log(vacaciones)
vacaciones="En casa";
console.log(vacaciones);
let text1="Hola! me gusta la fruta, y a ti?";
let text2="A mi tambien me encanta la fruta";
console.log(text1, text2);

//Ejercico-6-Inicializar variables de todos los tipos primitivos e imprimir el tipo de dato

let a = 10; 
console.log(typeof a);

let b = "10"; // number
console.log(typeof b); // string

let c = 1<3; // boolean
console.log(typeof c);

let name; // undefinited
console.log(typeof name);


//ejercicio 7 - Inicializar una variable num igual a 5 e imprimir en la consola num obteniendo 10 como resultado

let num = 5 + 5;
console.log(num);

//Declarar dos variables e inicializarlas tipo string e imprimir solo una nueva varialbe, con el contenido de las dos variables.

let e = "20";
let d = "10";
console.log(e+ d);

// ejercicio 9 - Inicializar una variable num de valor 5 y transforma num en cadena. Imprime en console.log los dos tipos de datos

let num1 = 5;
console.log(typeof num1) // number
let string = num1.toString();
console.log(string);
console.log(typeof string);

//ejercicio-10- Inicializar una variable tipo num con 6 decimales e imprimir la variable cambiando el tipo y que aparezcan solo 3 decimales

let decimal = 0.777777; //no me sale
let decimal1 = String(decimal.toFixed(3));
console.log(decimal1);



//ejercicio-11-Imprimir la suma de los caracteres entre dos 2 cadenas
let suma = "Hoy es Martes";
let suma2 = "Casi hemos terminado";
console.log(`${suma} ${suma2}` .length); // string interpolation

// ejercicio-12- Encapsular el resultado de la operación anterior en una variable e imprimer con la string interpolacion

let resultado = 34;
console.log(`${suma} ${suma2}; la suma de los caracteres de este texto es ${resultado}`);

// ejercicio-13-Escribir el resultado y el tipo de dato de la siguiente coercion:

let coerciona = 10 + "1";
console.log(coerciona); //string, resultado 101

let coercionb = 10 - "1";
console.log(typeof(coercionb)); // resultado 9,  number

// ejercicio-14- Sustituir la palabra "contigo" por la palabra "yo" sin crear una nueva cadena  e imprimir la nueva cadena en consola


let string14 = "Hey Tu, cómo te llamas? Hey, estoy hablando contigo!"
console.log(string14.replace('contigo', 'yo'));

