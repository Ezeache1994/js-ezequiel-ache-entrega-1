
alert(`¡Bienvenido Usuario a HaloGive! Somos un prototipo de una página de Crowdfunding, es decir, una iniciativa que busca recaudar microcréditos para emprendedores que están fuera del sistema de grandes créditos.`);

alert(`tu trabajo es testear nuestros sistemas para comprobar el servicio que buscamos brindar y así darnos un feedback de mejoras. Tu trabajo es:

1) Escoger diferentes rubros en los que invertir.

2) Filtrar dentro de los rubros qué tipo de iniciativa invertir.

3) Finalmente, escoger en qué deseas invertir o donar el dinero, seleccionar el monto a invertir y por último, el sistema te va a indicar cuál es el monto que vas a invertir + IVA."`);

alert(`Para empezar haz click en el boton que dice invertir asi empezamos`);

const botonClick = document.getElementById("btnInvertir");

function simulacion() {
    let UsuarioNombre = prompt(`Ingresa tu nombre Querido Usuario`);
    alert(`Hola ${UsuarioNombre}, continuemos`);

    let EdadUsuario = parseFloat(prompt(`Ingresa tu edad`));

    if (EdadUsuario <= 17) {
        alert(`Lo lamento, eres menor de edad`);
        return;
    } else {
        alert(`Eres mayor de edad, continuamos ${UsuarioNombre}`);
    }

    alert(`Ahora ${UsuarioNombre}, vamos a continuar. A continuación, se mostrarán los rubros en los que puedes invertir:`);

    // Definimos la clase Rubros
    class Rubros {
        constructor() {
            this.rubrosDisponibles = ['Tecnologia', 'Agricultura', 'Restauracion', 'Musica', 'Cine y series'];
        }
    
        seleccionarRubro() {
            let mensajeRubros = "Rubros disponibles:\n";
            this.rubrosDisponibles.forEach((rubro, index) => {
                mensajeRubros += `${index + 1}. ${rubro}\n`;
            });
            alert(mensajeRubros);
    
            let rubroSeleccionado = null;
    
            while (true) {
                let inputRubro = prompt("Ingrese el nombre del rubro que desea seleccionar (o escriba 'finalizar' para finalizar):");    
                if (inputRubro.toLowerCase() === 'finalizar') {
                    break; 
                } else if (this.rubrosDisponibles.includes(inputRubro)) {
                    rubroSeleccionado = inputRubro;
                    alert(`Ha seleccionado el rubro: ${rubroSeleccionado}`);
                    this.seleccionarNegocios(rubroSeleccionado); 
                    break; 
                } else {
                    alert("Rubro inválido. Por favor, seleccione un rubro válido o escriba 'finalizar' para finalizar.");
                }
            }
    
            return rubroSeleccionado;
        }

        seleccionarNegocios(rubroSeleccionado) {
            alert(`Haz escogido ${rubroSeleccionado}. Los negocios que se encuentran dentro de este rubro son:`);

            let negociosDisponibles = [];

            switch (rubroSeleccionado) {
                case 'Tecnologia':
                    negociosDisponibles = ['Josefo Iphone', 'El Ciber de la abuela', 'Tecnica un paso al hackeo', 'La Casa del parlante', 'Develop the Lazy Bob S.A', 'Stark Weapon Company'];
                    break;
                case 'Agricultura':
                    negociosDisponibles = ['Granja Tegridad', 'Vinicola Barney Gomez', 'El Choclo de Maria']; // Agregar negocios de Agricultura
                    break;
                case 'Restauracion':
                    negociosDisponibles = ['Pepe Botella', 'La Lechuga Vegana', 'La Aceituna Feliz']; // Agregar negocios de Restauracion
                    break;
                case 'Musica':
                    negociosDisponibles = ['Ricardio Moscaner', 'La Banda Del 31', 'Los Caprichosos']; // Agregar negocios de Musica
                    break;
                case 'Cine y series':
                    negociosDisponibles = ['La pasion de Firulais', 'La Mandarina Mecanica', 'Brazo Cortado']; // Agregar negocios de Cine y series
                    break;
                default:
                    alert(`No se encontraron negocios para el rubro ${rubroSeleccionado}.`);
            }

            let mensajeNegocios = `Los negocios a invertir dentro del rubro ${rubroSeleccionado} son:\n`;

            if (negociosDisponibles.length > 0) {
                negociosDisponibles.forEach((negocio, index) => {
                    mensajeNegocios += `${index + 1}. ${negocio}\n`;
                });
            } else {
                mensajeNegocios += "No hay negocios disponibles en este rubro.";
            }

            alert(mensajeNegocios);

            
            let inputNegocio = prompt(`Seleccione el negocio en el que desea ${rubroSeleccionado === 'Tecnologia' ? 'invertir' : 'donar'} (escriba el nombre del negocio):`);

            
            if (negociosDisponibles.includes(inputNegocio)) {
                
                let opcion = prompt("Escriba 'invertir' para invertir o 'donar' para donar:");
                let monto = parseFloat(prompt("Ingrese el monto a invertir o donar:"));

                let iva = 0;

                if (opcion.toLowerCase() === 'invertir') {
                    iva = 0.21; // IVA del 21% para inversiones
                } else if (opcion.toLowerCase() === 'donar') {
                    iva = 0.1; // IVA del 10% para donaciones
                } else {
                    alert("Opción inválida.");
                    return;
                }

                let total = monto + (monto * iva);

                alert(`El monto a ${opcion.toLowerCase()} con un IVA del ${iva * 100}% es: ${total.toFixed(2)}`);

                alert(`Resumen:\nRubro seleccionado: ${rubroSeleccionado}\nNegocio seleccionado: ${inputNegocio}\nMonto escogido: ${monto}\nTotal a pagar: ${total.toFixed(2)}`);

                // Solicitar pin de seguridad
                this.passwordFinalizacion();
            } else {
                alert("Negocio inválido.");
            }
        }
        
        passwordFinalizacion() {
            let pinCorrecto = false;
            while (!pinCorrecto) {
                let password = parseFloat(prompt(`Para finalizar la operación, complete el pin de seguridad: (Su contraseña es 12345#)`));
                if (password === 6) {
                    alert(`¡Enhorabuena ${UsuarioNombre}! Hemos finalizado la transacción.`);
                    pinCorrecto = true;
                } else {
                    alert("Contraseña incorrecta. Intente nuevamente.");
                }
            }
        }
    }
    
    const rubros = new Rubros();
    rubros.seleccionarRubro();
}

botonClick.addEventListener("click", simulacion);












































































































































// function iniciarTransaccion(){
//     alert(
//         "¡Bienvenido! Esta es una simulación de inversión donde podrás simular el monto que deseas donar o invertir. Solo necesitas proporcionar un monto, especificar si es una donacion o una inversion. Una vez que tengamos todos los datos, te informaremos sobre el monto invertido más el IVA."
//     );
//   //-----------------------------------------------------------------------

//     let userNamed = prompt("Ingresa tu nombre y apellido");
//     let MontoInvertir = parseInt(
//     prompt("Ingresa el monto que deseas ingresar " + userNamed)
// );

// //-----------------------------------------------------------------------

// alert(
//     "Bienvenido/a " + userNamed + " Haz decidido ingresar " + MontoInvertir
// );

//   //-----------------------------------------------------------------------

//     //-----------------------------------------------------------------------

//     alert(
//         "Ahora con el dinero ingresado debes escoger entre invertir y donar " +
//           userNamed
//       );
    
//       //-----------------------------------------------------------------------
    
//       let ivaInversion = 0.21;
//       let ivaDonacion = 0.11;
//       let operacion = prompt("¿Que deseas hacer donar o invertir?  " + userNamed);
    
//       //-----------------------------------------------------------------------
    
//       switch (operacion) {
//         case "invertir":
//           let inversionchoice = MontoInvertir * ivaInversion + MontoInvertir;
//           alert(
//             "el monto invertido en micro emprendimientos es un total de " +
//               inversionchoice +
//               " + iva  " +
//               userNamed
//           );
//           break;
//         case "donar":
//           let donacionchoice = MontoInvertir * ivaDonacion + MontoInvertir;
//           alert(
//             "el monto donado en micro emprendimientos es un total de " +
//               donacionchoice +
//               " + iva " +
//               userNamed
//           );
//           break;
    
//         default:
//           alert("Opcion no valida finalizamos la transaccion " + userNamed);
//           break;
//       }
    
//       if (operacion === "invertir" || operacion === "donar") {
//         alert(
//           "Para finalizar " +
//             userNamed +
//             " debes completar tu PIN de seguridad de 6 números los primeros 5 numeros de tu PIN son 15345# introduce el numero faltante"
//         );
    
//         //-----------------------------------------------------------------------
    
//         let pin = "12345";
    
//         let completado = false;
    
//         //-----------------------------------------------------------------------
    
//         while (!completado) {
//           let numeroFaltante = prompt(
//             "Ingresa el número faltante para completar tu PIN (debe ser un número del 0 al 9):"
//           );
    
//           if (numeroFaltante === "6") {
//             alert("PIN completado. ¡Gracias!");
//             completado = true;
//           } else {
//             alert(
//               "Erro el digito " +
//                 numeroFaltante +
//                 " Es un número inválido. Por favor, ingresa un número del 0 al 9."
//             );
//           }
//         }
//     }
    
//       //-----------------------------------------------------------------------
//     }
    
//     iniciarTransaccion();
    
