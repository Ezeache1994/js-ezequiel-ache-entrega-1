

/*
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const correoValue = document.getElementById("Email").value.trim();
    const contrasenaValue = document.getElementById("Password_login").value.trim();
    const recuerdameCheckbox = document.getElementById("Check_Recuerdame");

    const correoValido = correoValue !== "" && correoValue.includes("@");
    const contrasenaValida = contrasenaValue.length >= 1;

    if (correoValido && contrasenaValida) {
        fetch('URL_DEL_SERVIDOR/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: correoValue,
                password: contrasenaValue
            })
        })
        .then(response => {
            if (response.ok) {
                // Si la autenticación es exitosa
                return response.json();
            } else {
                // Si hay un error en la autenticación
                throw new Error('Error de autenticación');
            }
        })
        .then(data => {
            // Guardar datos de sesión si es necesario
            if (recuerdameCheckbox.checked) {
                sessionStorage.setItem("email", correoValue);
                sessionStorage.setItem("password", contrasenaValue);
            } else {
                localStorage.setItem("email", correoValue);
                localStorage.setItem("password", contrasenaValue);
            }

            // Ocultar mensaje de error si estaba visible
            document.getElementById("Mensaje_Negativo_Rojo").setAttribute("hidden", true);

            // Eliminar formulario y mostrar pantalla de carga
            loginForm.remove();
            carga.removeAttribute("hidden");

            // Simular carga y mostrar contenido secreto después de un tiempo
            setTimeout(() => {
                carga.remove();
                carga.setAttribute("hidden", true);
                contenidoSecreto.removeAttribute("hidden");
            }, 2005);
        })
        .catch(error => {
            // Mostrar mensaje de error en caso de fallo en la autenticación
            console.error('Error de autenticación:', error);
            document.getElementById("Mensaje_Negativo_Rojo").removeAttribute("hidden");
        });
    } else {
        // Mostrar mensaje de error si los campos no son válidos
        document.getElementById("Mensaje_Negativo_Rojo").removeAttribute("hidden");
    }
});

*/



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


