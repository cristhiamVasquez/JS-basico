var tiempo = document.querySelector("#tiempo");
var segundo = 0;

/*=====================================
SET INTERVAL (Intervalo de tiempo)
setInterval(function, tiempo)
======================================*/

setInterval(function() {

    segundo++;
    tiempo.innerHTML = segundo;

    //console.log(`segundo ${segundo}`);

}, 1000);