
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");
const textoSeleccionado = document.getElementById("textoSeleccionado");

const opciones = document.querySelectorAll(".opcion");

// Abrir y cerrar el desplegable
dropdownBtn.addEventListener("click", function() {

    dropdownList.classList.toggle("activo");

});

// Seleccionar una opción
opciones.forEach(function(opcion) {

    opcion.addEventListener("click", function() {

        // Obtener el texto de la opción
        const valor = opcion.textContent;

        // Mostrar la opción seleccionada
        textoSeleccionado.textContent = valor;

        // Quitar la selección anterior
        opciones.forEach(function(item) {
            item.classList.remove("seleccionado");
        });

        // Resaltar la opción elegida
        opcion.classList.add("seleccionado");

        // Cerrar el desplegable
        dropdownList.classList.remove("activo");

    });

});
