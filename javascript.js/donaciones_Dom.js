const Boton_Simulacion = document.getElementById("btnInvertir");
const Todo_El_Contenido_JS = document.getElementById("Todo_Contenido_JS");

Boton_Simulacion.addEventListener("click", function(event) {
    event.preventDefault();
    Todo_El_Contenido_JS.removeAttribute("hidden");
});

const NombreY_Apellido_Usuario = document.getElementById("Ingresar_Nombre");
const Edad_Usuario = document.getElementById("ingresar__Edad");
const Monto_Simulado_Input_HTML = document.getElementById("Monto__A_Donar");
const El_Iva = 0.21;
const Boton_Continuar_Dom = document.getElementById("Boton_Recibir_Datos");

Simulacion_De_Datos = () => {
    const segundo_Formulario = document.getElementById("Segundo_Formulario_Inputs");

    Boton_Continuar_Dom.addEventListener("click", function(event) {
        event.preventDefault();

        const Edad_Usuario_Recibir_Valor = parseInt(Edad_Usuario.value);
        let Monto_Simulado_Recibir_Valor = parseInt(Monto_Simulado_Input_HTML.value);

        const Monto_Mas_Iva = Monto_Simulado_Recibir_Valor * (1 + El_Iva);

        sessionStorage.setItem("Nombre de Usuario", "El Nombre del Usuario es: " + NombreY_Apellido_Usuario.value);

        if (isNaN(Edad_Usuario_Recibir_Valor) || Edad_Usuario_Recibir_Valor < 17) {
            alert("Lamentándolo mucho, no podemos continuar.");
            return;
        } else {
            sessionStorage.setItem("Edad Del Usuario", `La edad del usuario es: ` + Edad_Usuario_Recibir_Valor);
            sessionStorage.setItem("Monto Simulado", `El monto a Simular es: ` + Monto_Mas_Iva);
        }

        segundo_Formulario.removeAttribute("hidden");

        sessionStorage.setItem("MontoDonado", `El monto Donado es: ${Monto_Simulado_Recibir_Valor}`);

        const Segundo_Formulario = () => {
            class Rubros_Escoger {
                constructor() {
                    this.Rubros = ["tecnologia", "musica", "cocina", "cine", "construccion", "agricultura"];
                }

                SeleccionarRubros() {
                    const Mensaje_Rubro = "Rubros disponibles:\n";

                    this.Rubros.forEach((rubro, index) => {
                        const element = document.getElementById("Muestra_Rubros_Diponibles").querySelectorAll("h4")[index];
                        if (element) {
                            element.textContent = rubro;
                        };
                    });

                    const buscar_El_Rubro = document.getElementById("Buscar_Rubro");

                    const datos_Ocultos_Negocios = document.getElementsByClassName("datos_Negocios");

                    buscar_El_Rubro.addEventListener("click", (event) => {
                        event.preventDefault();

                        Array.from(datos_Ocultos_Negocios).forEach(elemento => {
                            elemento.removeAttribute("hidden");
                        });

                        const Inputs_Seleccionar_Rubro = document.getElementById("Input_Rubroz").value;
                        if (this.Rubros.includes(Inputs_Seleccionar_Rubro)) {
                            const rubroSeleccionado = Inputs_Seleccionar_Rubro;

                            this.seleccionarNegocios(rubroSeleccionado);

                            sessionStorage.setItem("Rubro Seleccionado", `el rubro escogido es: ` + rubroSeleccionado)

                            const dato_Rubro_Retornado_HTML = document.getElementById("Dato_Rubro_Seleccionado");

                        } else {
                            swal("Error!", "...Escoge un rubro valido!");
                        };
                    });
                }

                seleccionarNegocios = (rubroSeleccionado) => {
                    let negociosDisponibles = [];

                    switch (rubroSeleccionado) {
                        case 'tecnologia':
                            negociosDisponibles = ['Tecnica un paso al hackeo', 'La Casa del parlante', 'Develop the Lazy Bob S.A'];
                            break;
                        case 'musica':
                            negociosDisponibles = ['Ricardio Moscaner', 'La Banda Del 31', 'Los Caprichosos'];
                            break;
                        case 'cocina':
                            negociosDisponibles = ['Pepe Botella', 'La Lechuga Vegana', 'La Aceituna Feliz'];
                            break;
                        case 'cine':
                            negociosDisponibles = ['La pasion de Firulais', 'La Mandarina Mecanica', 'Brazo Cortado'];
                            break;
                        case 'construccion':
                            negociosDisponibles = ['El Ladrillo Rosao', 'Casa del Albañil', 'The Brick S.A'];
                            break;
                        case 'agricultura':
                            negociosDisponibles = ['Granja Tegridad', 'Vinicola Barney Gomez', 'El Choclo de Maria'];
                            break;
                        default:
                            break;
                    }

                    const contenedorNegocios = document.getElementById("Muestra_Negocios_Diponibles");

                    // Actualizar el contenido de los elementos h4
                    negociosDisponibles.forEach((negocio, index) => {
                        const elementoH4 = contenedorNegocios.querySelectorAll("h4")[index];
                        if (elementoH4) {
                            elementoH4.textContent = negocio;
                            elementoH4.removeAttribute("hidden"); // Mostrar el elemento si estaba oculto
                        }
                    });


                    const inputNegocio = document.getElementById("Input_Escoger_Negocio");

                    const h6NegocioSeleccionado = document.getElementById("Datos_Negocio_Seleccionado");


                    document.getElementById("Finalizar").addEventListener("click", function(event) {
                        event.preventDefault();

                        const BackGround = document.getElementById("Background_JS_Oculto");
                        const Gracais = document.querySelector(".agradecimientos_div");
                        const inputNegocio = document.getElementById("Input_Escoger_Negocio");
                        const negocioEscogido = inputNegocio.value.trim();

                        if (negocioEscogido !== "") {
                            document.getElementById("Datos_Nombres_De_Js_A_Html").textContent = sessionStorage.getItem("Nombre de Usuario");
                            document.getElementById("Datos_Edad_De_Js_A_Html").textContent = sessionStorage.getItem("Edad Del Usuario");
                            document.getElementById("Datos_Monto_De_Js_A_Html").textContent = sessionStorage.getItem("Monto Simulado");
                            document.getElementById("Dato_Rubro_Seleccionado").textContent = sessionStorage.getItem("Rubro Seleccionado");
                            document.getElementById("Datos_Negocio_Seleccionado").textContent = negocioEscogido;

                            swal("Muchas Gracias!", "La Simulacion ha Finalizado!", "success");
                            Gracais.removeAttribute("hidden");
                            BackGround.removeAttribute("hidden");

                            sessionStorage.setItem("Negocio Seleccionado", negocioEscogido);
                        } else {
                            alert("Por favor, ingrese un nombre de negocio válido.");
                        }
                    });



                };


            };

            // Crear una instancia de la clase Rubros_Escoger
            const rubrosEscoger = new Rubros_Escoger();
            // Llamar al método SeleccionarRubros
            rubrosEscoger.SeleccionarRubros();
        };

        Segundo_Formulario();
    });
};

Simulacion_De_Datos();





const Boton_Informativo_Tecnologia = document.querySelector("#Tecnologia_Link");
const Boton_Informativo_Musica = document.querySelector("#Musica_Link");
const Boton_Informativo_Cocina = document.querySelector("#Cocina_Link");
const Boton_Informativo_Construccion = document.querySelector("#Construccion_Link");
const Boton_Informativo_Cine_Series = document.querySelector("#Cine_Link");
const Boton_Informativo_Agricultura = document.querySelector("#Agricultura_Link");

const tecnologiaElemento = document.querySelector(".Item-To-Invest_Tecnologia");

const musicoElemento = document.querySelector(".Item-To-Invest_Musico");

const cocinaElemento = document.querySelector(".Item-To-Invest_Cocina");

const construccionElemento = document.querySelector(".Item-To-Invest_Construccion");

const cineElemento = document.querySelector(".Item-To-Invest_Cine");

const agriculturaElemento = document.querySelector(".Item-To-Invest_Agriculture");


Boton_Informativo_Tecnologia.addEventListener("click", function(event) {
    event.preventDefault();
    tecnologiaElemento.removeAttribute("hidden");
});

Boton_Informativo_Musica.addEventListener("click", function(event) {
    event.preventDefault();
    musicoElemento.removeAttribute("hidden");
});

Boton_Informativo_Cocina.addEventListener("click", function(event) {
    event.preventDefault();
    cocinaElemento.removeAttribute("hidden");
});

Boton_Informativo_Construccion.addEventListener("click", function(event) {
    event.preventDefault();
    construccionElemento.removeAttribute("hidden");
});

Boton_Informativo_Cine_Series.addEventListener("click", function(event) {
    event.preventDefault();
    cineElemento.removeAttribute("hidden");
});

Boton_Informativo_Agricultura.addEventListener("click", function(event) {
    event.preventDefault();
    agriculturaElemento.removeAttribute("hidden");
});












