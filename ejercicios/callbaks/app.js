/*console.log(document); //Representación en html
cosole.dir(document); //Representación en javascript*/

//Ejemplo1
/*setTimeout(function () {
  console.log("Este es un callback.");
}, 3000); // La funcion se ejecurará depúes de un segundo.
*/
//Ejemplo2
/*const ejecutarMasTarde = () => {
  console.log("Este es un callback.");
};
 
//La funcion se ejecurará despúes de un segundo.
//La función que se pasa como parametro solo se invoca -No se incluyen los ()-, la ejecución se hace internamente

setTimeout(ejecutarMasTarde, 3000);*/

//Ejmeplo 3
/*const ejecutarMasTarde = () => {
  setTimeout(() => {
    console.log("Este es un callback.");
  }, 3000); // La funcion se ejecurará depúes de un segundo.
};

ejecutarMasTarde();*/

//Ejemplo 4
/*const funciondeCallback = () => {
  console.log("Me ejecuto después.");
};
const ejecutarMasTarde = () => {
  setTimeout(funciondeCallback, 3000); // La funcion se ejecurará depúes de un segundo.
};

ejecutarMasTarde();*/

//Ejemplo 5
/*function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}

//se ejecuta la función que llega en el parámetro callback
function multiFuncion(num1, num2, callback) {
  const resultado = callback(num1, num2);
  console.log(resultado);
}

//Haciendo el callback
multiFuncion(5, 4, sumar);
multiFuncion(5, 4, restar);
multiFuncion(5, 4, multiplicar);
multiFuncion(5, 4, function dividir(num1, num2) {
  return num1 / num2;
});

//Ejemplo 6
const miBoton = document.getElementById("miBoton");
console.log(miBoton);
const callbackClick = (evento) => {
  console.log("Soy un callback al dar clic en el botón");
};
miBoton.addEventListener("click", callbackClick);
*/
//Ejemplo 7

const function1 = () => {
  console.log("función 1");
  setTimeout(function2, 3000);
};

const function2 = () => {
  console.log("función 2");
  setTimeout(function3, 2000);
};

const function3 = () => {
  console.log("función 3");
  setTimeout(function4, 1000);
};

const function4 = () => {
  console.log("función 4");
};

setTimeout(function1, 4000);
