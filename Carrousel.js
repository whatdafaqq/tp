// Definir un array de imágenes
var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
var indiceActual = 0;

// Obtener elementos del DOM
var imagen = document.getElementById("carousel-image");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

// Función para mostrar la imagen actual
function mostrarImagenActual() {
    imagen.src = imagenes[indiceActual];
}

// Función para avanzar al siguiente elemento
function avanzar() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagenActual();
}

// Función para retroceder al elemento anterior
function retroceder() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagenActual();
}

// Asignar funciones a los botones de navegación
prevButton.addEventListener("click", retroceder);
nextButton.addEventListener("click", avanzar);

// Mostrar la primera imagen al cargar la página
mostrarImagenActual();
