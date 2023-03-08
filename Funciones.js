function mostrarDetalles(x) {
    if (x == 1) {
        document.getElementById('DetallesEmpleo').innerHTML = "Empleo Actual";
    }
    else if (x == 2) {
        document.getElementById('DetallesEmpleo').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus esse sunt qui saepe, nostrum placeat earum dolorum neque laborum aliquid. Deleniti dolore ratione fuga fugit totam quibusdam dolorum odit repudiandae?";
    }
    else if (x == 3) {
        document.getElementById('DetallesEmpleo').innerHTML = "Lorem ipsum dolor";
    }
}

function mostrarFormacion(x) {
    if (x == 1) {
        document.getElementById('Formacion1').innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, alias!";
    }
    else if (x == 2) {
        document.getElementById('Formacion2').innerHTML = "Lorem, ipsum.";
    }
    else if (x == 3) {
        document.getElementById('Formacion3').innerHTML = "Lorem ipsum dolor sit.";
    }
}