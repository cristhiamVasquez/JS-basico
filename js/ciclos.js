// CICLO FOR SIMPLE

var cajas = document.querySelectorAll(".cajas");
console.log(`cajas ${cajas}`);

/*cajas[0].style.width = "50px";
cajas[0].style.height = "50px";
cajas[0].style.background = "red";*/

for (var i = 0; i < cajas.length; i++) {

    cajas[i].style.width = "50px";
    cajas[i].style.height = "50px";
    cajas[i].style.background = "red";
    cajas[i].style.marginTop = "5px";
    cajas[i].style.marginLeft = "5px";
    cajas[i].style.display = "inline-block";

}

/*for (var i = 0; i <= 5; i++) {
    console.log(`i ${i}`);
}*/

//CICLO WHILE

var k = 1;

while (k <= 5) {
    console.log(`k ${k}`);
    k++;
}

// DO WHILE

var p = 1;

do {
    console.log(`p ${p}`);
    p++;
}
while (p <= 5);