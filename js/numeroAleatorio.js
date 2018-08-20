var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/*======================================================
NUMEROS ALEATORIOS
Math.random() -> numero aleatorios con decimal
Math.floor() -> redondea el numero menor al decimal
Math.ceil() -> redondea el numero mayor al decimal
Math.round() -> redonde el valor al numero mas proximo al decimal
======================================================*/


numero = Math.floor(Math.random() * 10);
//console.log(numero);
numeroAleatorio.innerHTML = numero;