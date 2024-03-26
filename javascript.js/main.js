// alert(`¡Bienvenido Usuario a HaloGive! Somos un prototipo de una página de Crowdfunding, es decir, una iniciativa que busca recaudar microcréditos para emprendedores que están fuera del sistema de grandes créditos.`);

        // alert(`tu trabajo es testear nuestros sistemas para comprobar el servicio que buscamos brindar y así darnos un feedback de mejoras. Tu trabajo es:

        // 1) Escoger diferentes rubros en los que invertir.

        // 2) Filtrar dentro de los rubros qué tipo de iniciativa invertir.

        // 3) Finalmente, escoger en qué deseas invertir o donar el dinero, seleccionar el monto a invertir y por último, el sistema te va a indicar cuál es el monto que vas a invertir + IVA."`);

        // alert(`Para empezar haz click en el boton que dice invertir asi empezamos`);

/*

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

document.querySelector(`#rubros__links__tecnologia`);

*/