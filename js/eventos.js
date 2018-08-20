var recuadro = document.querySelector("#recuadro");

/*========================
       eventos DOOM
=========================*/

function cambiarColor() {

    recuadro.style.background = "yellow";

}

/*========================
       eventos JS
=========================*/

var boton = document.querySelector("#boton");
boton.addEventListener("click", moverCaja);

function moverCaja() {

    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";

}