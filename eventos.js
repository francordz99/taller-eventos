
const contenedor = document.getElementById("contenedor");


contenedor.addEventListener("click", function () {
    alert('Hola! Soy el div');
});

const saludarBoton = document.getElementById("saludarBoton");

saludarBoton.addEventListener("click", function () {
    event.stopPropagation();
    alert('Hola!');

});