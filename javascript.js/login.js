const submitButton = document.getElementById("submitButton");
const loginForm = document.getElementById("loginForm");
const contenidoSecreto = document.getElementById("Todo_El_Codigo");

const carga=document.getElementById("Pantalla_De_Carga");

const imagen_Cont= document.getElementById ("container_Imagen");
const imagen= document.getElementById ("imagen_HG");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const correoValue = document.getElementById("Email").value.trim();
    const contrasenaValue = document.getElementById("Password_login").value.trim();
    const recuerdameCheckbox = document.getElementById("Check_Recuerdame");

    const correoValido = correoValue !== "" && correoValue.includes("@");
    const contrasenaValida = contrasenaValue.length >= 1;



    if (correoValido && contrasenaValida) {
        if (recuerdameCheckbox.checked) {
            // Guardar en sessionStorage
            sessionStorage.setItem("email", correoValue);
            sessionStorage.setItem("password", contrasenaValue);
            document.getElementById("Mensaje_Negativo_Rojo").setAttribute("hidden", true);
        } else {
            // Guardar en localStorage
            localStorage.setItem("email", correoValue);
            localStorage.setItem("password", contrasenaValue);
            document.getElementById("Mensaje_Negativo_Rojo").setAttribute("hidden", true);
        }
    
        loginForm.remove();
        carga.removeAttribute("hidden");
    
        setTimeout(() => {
            carga.remove();
            carga.setAttribute("hidden", true);
        }, 2000);
    
        setTimeout(() => {
            contenidoSecreto.removeAttribute("hidden");
        }, 2005);
    
    } else {
        document.getElementById("Mensaje_Negativo_Rojo").removeAttribute("hidden");
    }
    
});

// En otro script o parte del código donde se cargue el formulario (puede ser en la misma página o en otra)
window.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("Email");
    const passwordInput = document.getElementById("Password_login");
    const recuerdameCheckbox = document.getElementById("Check_Recuerdame");

    // Verificar si hay datos guardados en localStorage o sessionStorage
    const savedEmail = localStorage.getItem("email") || sessionStorage.getItem("email");
    const savedPassword = localStorage.getItem("password") || sessionStorage.getItem("password");

    if (savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
        recuerdameCheckbox.checked = true; // Marcar el checkbox si se encontraron datos guardados
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






