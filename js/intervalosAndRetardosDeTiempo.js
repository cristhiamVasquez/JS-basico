var tiempo = document.querySelector("#tiempo");
var segundo = 0;

/*=====================================
SET INTERVAL (Intervalo de tiempo)
setInterval(function, tiempo)
======================================*/

var intervalo = setInterval(function() {

    segundo++;
    tiempo.innerHTML = segundo;

    //console.log(`segundo ${segundo}`);

}, 1000);


setTimeout(function() {

    //alert("se cumplio el tiempo")
    clearInterval(intervalo);

}, 5000);