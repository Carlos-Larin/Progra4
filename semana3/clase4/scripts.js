//Funcion nominales
function suma(a, b) {
  return a + b;
}
//ver en consola
console.log(suma(20,30));
//alerta en pantalla
//alert(suma(20,30));

// funcion anonima
var resta = function(a, b) {
  return a - b;
}
//ver en consola
//console.log(resta(20,30));


// flecha function
var multiplicacion = (a,b) => a * b;
//ver en consola
//console.log(multiplicacion(20,30));

//ejemplo de funcion flecha     Operador ternario
var par = num=> num % 2 ==0 ? "Es par" : "Es impar";
console.log(par(2));
