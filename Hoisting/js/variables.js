/****************** diferencia hoisting entre variables y objetos ********************/
console.log('******************* diferencia entre variables y objetos ***************')

var a = 5;
var b = a;

console.log(a,b);  // 5 5
a = 6
console.log(a,b);  // 6 5 

// b sigue valiendo 5 porque crea una copia del valor cuando lo lee, en este caso es 5. Al hacerse la copia da igual que
// posteriormente cambie el valor de a, ya que ya se ha hecho la copia.



var obj1 = { a : 5};
var obj2 = obj1;
console.log(obj1.a, obj2.a); // 5 5
obj1.a = 6;
console.log(obj1.a, obj2.a); // 6 6

// en el caso de los objetos, ambos apuntan al mismo sitio, serían como accesos directos distintos (no es una copia).
// así si cambia el valor de donde apuntan, también cambian, aunque no se llamen igual.



console.log('******************* variables ***************')

/* 
El motor de JS hace primero una lectura y allí donde encuentra una var, let o const (y funciones) le asigna un espacio de memoria.



1º Declaración:    (let a)     >>>> Esto lo hace el motor de JS en una primera lectura (asignación de memorias)  

2º Inicialización: (undefined) >>>> Asignación valor undefined.

3º Asignación:     (a = 3)     >>>> Asignación valor que le pongas.



-- VAR Hoisting --
: único para variables tipo VAR. Donde se Declara e inicializa en el mismo scope >> en la prelectura inicial hace ambas.
: es decir, que en esa primera pre-lectura  le asigna memoria + un valor undefined a las VAR.


-- LET, CONST y CLASS -- : 
Hoisting NO funciona para LET, CONST y CLASS ya que el scope de estos desacopla: declaración e inicialización en DOS partes.
: Por eso primero se declara (asignación de memoria), luego en el segundo ciclo se inicializa (le da valor undefined) y luego pasaría 
: a la asignación su la hubiera.

Como vemos existe un momento en el que está declarada (memoria) pero no inicializada (no tiene valor asignado).
A este momento se le conoce como la TDZ (The Dead Zone).

*/


/*VAR*/
console.log(`valor de var a (declarado e inicializado): ${testA}`); // undefined - la declaración e inicialización se ha hecho al arrancar)
var testA = 5;  // asignación
console.log(`valor de a tras la asignación: ${testA}`);  //5


/*LET, CONT, CLASS*/

console.log(`valor de a tras la asignación: Error`); // ESTO DA ERROR porque LET se declarado pero NO inicializado antes (TDZ). 
let testB; // inicializado.
console.log(`valor de a tras la inicialización: ${testB}`); //undefined porque ya se ha inicializado
testB = 6; // Asignación
console.log(`valor de a tras la asignación: ${testB}`);  // 6



/******** EJEMPLO ******/
console.log('*********************** EJEMPLO 1 ********************')
var nombre = nombre // undefined
// let nombre = nombre  ERROR


console.log('*********************** EJEMPLO 2 ********************')
// var hoisting
num;     // => undefined
var num;
num = 10;
console.log(num);     // => 10
// function hoisting
getPi;   // => function getPi() {...}
getPi(); // => 3.14
function getPi() {
  return 3.14;
}


console.log('*********************** EJEMPLO 3 ********************')

let condition = true;
if (condition) {
  // console.log(number); // => Throws ReferenceError
  let number;
  console.log(number); // => undefined
  number = 5;
  console.log(number); // => 5
}
