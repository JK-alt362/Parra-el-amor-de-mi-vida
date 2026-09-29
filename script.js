const boton = document.querySelector("#abrirCarta");
const inicio = document.querySelector("#inicio");
const carta = document.querySelector("#carta");
const texto = document.querySelector(".texto-escrito");
const sobre = document.querySelector("#sobre");


boton.addEventListener("click", function() {

    sobre.classList.add("abierto");

    setTimeout(function() {

        inicio.style.display = "none";
        carta.style.display = "block";

        escribirTexto();

        setInterval(crearCorazon, 700);

    }, 800);

});


function escribirTexto() {

    const mensaje = "Hola, amor. 🥺❤️";

    texto.textContent = "";

    let posicion = 0;

    const velocidad = 120;

    const intervalo = setInterval(function() {

        texto.textContent += mensaje[posicion];

        posicion++;

        if (posicion >= mensaje.length) {

            clearInterval(intervalo);

            mostrarParrafos();

        }

    }, velocidad);

}


function mostrarParrafos() {

    const parrafos =
        document.querySelectorAll(".parrafo-carta");

    const finalCarta =
        document.querySelector(".final-carta");

    const foto =
        document.querySelector(".foto-carta");


    parrafos.forEach(function(parrafo, indice) {

        setTimeout(function() {

            parrafo.classList.add("visible");

        }, indice * 1200);

    });


    setTimeout(function() {

        foto.classList.add("visible");

    }, parrafos.length * 1200 + 800);


    setTimeout(function() {

        finalCarta.classList.add("visible");

    }, parrafos.length * 1200 + 2200);

}


function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon-flotante");

    corazon.textContent = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (15 + Math.random() * 25) + "px";

    corazon.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    document.body.appendChild(corazon);

    setTimeout(function() {

        corazon.remove();

    }, 7000);

}