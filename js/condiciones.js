///// if
function difernciaEntreLetras() {
    var a = 2;
    var b = 5;

    if (a < b) {
        console.log('a es menor que b');
    } else if (a == b) {
        console.log('a es igual a b');
    } else {
        console.log('otra condicion');

    }
};

///// SWITCH

function encontrarDia() {

    var dia = 'Lunes'

    switch (dia) {

        case 'Lunes':
            console.log(`hoy es ${dia}`);
            break;
        case 'Martes':
            console.log(`hoy es ${dia}`);
            break;

        default:
            console.log('no se encontro el dia');

    };

};

encontrarDia();