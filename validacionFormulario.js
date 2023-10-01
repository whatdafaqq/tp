// Validación de campos del formulario
function validarFormulario() {
    // Obtén los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    // Realiza validaciones aquí
    if (nombre === "") {
      // Muestra un mensaje de error en HTML
      document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
      return false; // Evita el envío del formulario
    }
    // Más validaciones...
    return true; // Envío del formulario si todo está bien
  }

  
  var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
var indiceActual = 0;

function avanzar() {
  indiceActual = (indiceActual + 1) % imagenes.length;
  // Actualiza la imagen en tu página
}

function retroceder() {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  // Actualiza la imagen en tu página
}
