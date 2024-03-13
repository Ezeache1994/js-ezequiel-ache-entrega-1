const submitButton = document.getElementById("submitButton");
const loginForm = document.getElementById("loginForm");
const contenidoSecreto = document.getElementById("Todo_El_Codigo");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Obtener los valores de los campos de entrada
    const correoValue = document.getElementById("Email").value.trim();
    const contrasenaValue = document.getElementById("Password_login").value.trim();

    // Verificar si se ingresó un correo electrónico válido
    const correoValido = correoValue !== "" && correoValue.includes("@");

    // Verificar si se ingresó una contraseña válida (al menos 1 caracter)
    const contrasenaValida = contrasenaValue.length >= 1;

    // Si el correo y la contraseña son válidos, mostrar el contenido secreto
    if (correoValido && contrasenaValida) {
        contenidoSecreto.removeAttribute("hidden");
        loginForm.remove();

    } else {
        // Si no son válidos, mostrar un mensaje de alerta
        alert("Por favor, ingrese un correo electrónico válido y una contraseña con al menos 1 carácter.");
    }
});




/*
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const loginForm = document.getElementById("loginForm");
    const contenidoSecreto = document.getElementById("Todo_El_Codigo");
    const pantallaDeCarga = document.getElementById("Pantalla_De_Carga");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const correoValue = document.getElementById("Email").value.trim();
        const contrasenaValue = document.getElementById("Password_login").value.trim();

        const correoValido = correoValue.includes("@");
        const contrasenaValida = contrasenaValue.length >= 1;

        if (correoValido && contrasenaValida) {
            mostrarPantallaDeCarga(3000); // Mostrar pantalla de carga durante 3 segundos
        } else {
            alert("Por favor, ingrese un correo electrónico válido y una contraseña con al menos 1 carácter.");
        }
    });

    function mostrarPantallaDeCarga(tiempo) {
        loginForm.setAttribute("hidden", true); // Ocultar formulario de inicio de sesión
        pantallaDeCarga.removeAttribute("hidden"); // Mostrar pantalla de carga
        setTimeout(function() {
            pantallaDeCarga.setAttribute("hidden", true); // Ocultar pantalla de carga después de 3 segundos
            mostrarContenidoSecreto(); // Mostrar contenido secreto
        }, tiempo);
    }
    function mostrarContenidoSecreto() {
        contenidoSecreto.removeAttribute("hidden"); // Mostrar contenido secreto
    }
});


*/






