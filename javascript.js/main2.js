const inicioSimulacion = document.querySelector("#btnInvertir");
const firstLevelSimulation = document.querySelector(".Simulacion-1er-Nivel");

inicioSimulacion.addEventListener("click", function(event) {
    event.preventDefault();
    firstLevelSimulation.removeAttribute("hidden");
});

/*
logica de formularios
*/

let Ingresar_nombre = document.querySelector("#ingresar_Nombre");
let Ingresar_edad = document.querySelector("#ingresar_Edad");
let mensaje_Oculto= document.querySelector(".mensaje_oculto-menor_edad");
let Boton_Continuar1 = document.querySelector("#boton_Guardar_Variables");

Boton_Continuar1.addEventListener("click", function(event) {    
    event.preventDefault();
    
    let edad = parseInt(Ingresar_edad.value);    
    
    if (edad >= 18) {
        
        console.log("El usuario es mayor de 18 años.");
        Boton_Continuar1.removeAttribute("hidden");
        mensaje_Oculto.setAttribute("hidden", "true");
    } else {
        mensaje_Oculto.removeAttribute("hidden");
        console.log("El usuario es menor, No se realiza ninguna acción.");
        return;
    }
    
    /* separacion de logica ---------------------------------------------------------------------------------------- */
    localStorage.setItem("nombre", Ingresar_nombre.value);
    localStorage.setItem("edad", edad);

    /*----------------------------------------------------------------------------------------------------------------*/
    const rubros= [
        {nombre:"tecnologia",descripcion:"Rubro de Tecnologia"},
        {nombre:"musica",descripcion:"rubro muscial"},
        {nombre:"cocina",descripcion:"rubro culinario"},
        {nombre:"construccion",descripcion:"rubro de la construccion"},
        {nombre:"cine",descripcion:"rubro cinematografico"},
        {nombre:"agricultura",descripcion:"rubro alimenticio"},
    ];

    const elegirRubro = document.querySelector("#rubro_seleccion");
    const segundaSimulacion = Boton_Continuar1;

    /* segunda simulacion inicio --------------------------------------------------------------------------------------------------------- */
    
    segundaSimulacion.addEventListener("click",function(event){
        event.preventDefault();
        elegirRubro.removeAttribute("hidden");

        /*-------------------------------TECNOLOGIA---------------------------------------- */

        /*separador de logica------------------------------------------------------------- */
        
        const Elegir_Rubro_De_Tecnologia=document.querySelector("#tecnologia_escoger-rubro");
        const Escoger_Negocios_Tecnologia=document.querySelector("#Negocios_Tecnologia");
        
        /* escoger Donar o Invertir */
        const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");
        /* escoger Donar o Invertir */

        Elegir_Rubro_De_Tecnologia.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Negocios_Tecnologia.removeAttribute("hidden");

            /* guardar en el session */
            const nombreRubro1 = "tecnologia"; 

            const rubroSeleccionado1 = rubros.find(rubro => rubro.nombre === nombreRubro1);
        
            if (rubroSeleccionado1) {
                sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado1.nombre);
                sessionStorage.setItem("descripcion", rubroSeleccionado1.descripcion);
                console.log("el rubro seleccionado es: "+rubroSeleccionado1.nombre);
            };
            
            
            /*escoger negocio*/
            const Negocios_Tecnologia_descripcion = [
                { Negocio: "Casa del Procesador", descripcion: "Fabrica de Procesadores" },
                { Negocio: "Tech House", descripcion: "Negocio de fabricacion de Hardware industrial" },
                { Negocio: "Micro-Develop", descripcion: "Consultora de desarrollo y programacion" }
            ];


            const Elegir_Negocio_especifico_tecnologia_1 = document.querySelector("#tecno_1");


            const NegocioElegido1 = "Casa del Procesador";
            const Negocio_Tecnologico_Escogido1 = Negocios_Tecnologia_descripcion.find(Negocio => Negocio.Negocio === NegocioElegido1);
            
            Elegir_Negocio_especifico_tecnologia_1.addEventListener("click", function (event) {
                event.preventDefault();
                Escoger_Invertir.removeAttribute("hidden");
            
                // Guardar negocio en sessionStorage
                if (Negocio_Tecnologico_Escogido1) {
                    sessionStorage.setItem("negocio_escogido", `${Negocio_Tecnologico_Escogido1.Negocio}: ${Negocio_Tecnologico_Escogido1.descripcion}`);
                    console.log(`Negocio escogido: ${Negocio_Tecnologico_Escogido1.Negocio}, El negocio se dedica a: ${Negocio_Tecnologico_Escogido1.descripcion}`);
                }
            });




            /*escoger especificamente negocio tecnologico 2*/
            const Elegir_Negocio_especifico_tecnologia_2=document.querySelector("#tecno_2");

        Elegir_Negocio_especifico_tecnologia_2.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Invertir.removeAttribute("hidden");
        });

        /*escoger especificamente negocio tecnologico 3*/
        const Elegir_Negocio_especifico_tecnologia_3=document.querySelector("#tecno_3");

        Elegir_Negocio_especifico_tecnologia_3.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Invertir.removeAttribute("hidden");
        });

        });


        /*-------------------------------MUSICA---------------------------------------- */
        const Elegir_Rubro_De_Musica=document.querySelector("#musica_escoger-rubro");
        const Escoger_Negocios_Musica=document.querySelector("#Negocios_Musica");

        Elegir_Rubro_De_Musica.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Negocios_Musica.removeAttribute("hidden");

            /*guardar Musica*/

            const nombreRubro2 = "musica"; 

            const rubroSeleccionado2 = rubros.find(rubro => rubro.nombre === nombreRubro2);
        
            if (rubroSeleccionado2) {
                sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado2.nombre);
                sessionStorage.setItem("descripcion", rubroSeleccionado2.descripcion);
                console.log("el rubro seleccionado es: "+rubroSeleccionado2.nombre);
            };
            //const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");



        });

        /*-------------------------------COCINA---------------------------------------- */

        const Elegir_Rubro_De_Cocina=document.querySelector("#cocina_escoger-rubro");
        const Escoger_Negocios_Cocina=document.querySelector("#Negocios_Cocina");

        Elegir_Rubro_De_Cocina.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Negocios_Cocina.removeAttribute("hidden");

            /*guardar cocina */
            const nombreRubro3 = "cocina"; 

            const rubroSeleccionado3 = rubros.find(rubro => rubro.nombre === nombreRubro3);
        
            if (rubroSeleccionado3) {
                sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado3.nombre);
                sessionStorage.setItem("descripcion", rubroSeleccionado3.descripcion);
                console.log("el rubro seleccionado es: "+rubroSeleccionado3.nombre);
            };

            //const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");
        });

        /*-------------------------------CONSTRUCCION---------------------------------------- */
        const Elegir_Rubro_De_Construccion=document.querySelector("#construccion_escoger-rubro");
        const Escoger_Negocios_Construccion=document.querySelector("#Negocios_Construccion");

        Elegir_Rubro_De_Construccion.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Negocios_Construccion.removeAttribute("hidden");

            /*guardar Construccion*/

            const nombreRubro4 = "construccion"; 

            const rubroSeleccionado4 = rubros.find(rubro => rubro.nombre === nombreRubro4);
        
            if (rubroSeleccionado4) {
                sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado4.nombre);
                sessionStorage.setItem("descripcion", rubroSeleccionado4.descripcion);
                console.log("el rubro seleccionado es: "+rubroSeleccionado4.nombre);
            }; 
            //const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");

        });

        /*-------------------------------CINE---------------------------------------- */
        const Elegir_Rubro_De_Cine=document.querySelector("#cine_escoger-rubro");
        const Escoger_Negocios_Cine=document.querySelector("#Negocios_Cine");
        
        Elegir_Rubro_De_Cine.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Negocios_Cine.removeAttribute("hidden");

            /* Guardar cine*/
            const nombreRubro5 = "cine"; 

            const rubroSeleccionado5 = rubros.find(rubro => rubro.nombre === nombreRubro5);
        
            if (rubroSeleccionado5) {
                sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado5.nombre);
                sessionStorage.setItem("descripcion", rubroSeleccionado5.descripcion);
                console.log("el rubro seleccionado es: "+rubroSeleccionado5.nombre);
            };
            //const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");


        });

        /*-------------------------------AGRICULTURA---------------------------------------- */
        const Elegir_Rubro_De_Agro=document.querySelector("#agricultura_escoger-rubro");
        const Escoger_Negocios_Agro=document.querySelector("#Negocios_Agro");

        Elegir_Rubro_De_Agro.addEventListener("click",function(event){
            event.preventDefault();
            Escoger_Negocios_Agro.removeAttribute("hidden");

            /*guardar agricultura*/
            const nombreRubro6 = "agricultura"; 

            const rubroSeleccionado6 = rubros.find(rubro => rubro.nombre === nombreRubro6);
        
            if (rubroSeleccionado6) {
                sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado6.nombre);
                sessionStorage.setItem("descripcion", rubroSeleccionado6.descripcion);
                console.log("el rubro seleccionado es: "+rubroSeleccionado6.nombre);
            }; 

            //const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");

        });















    });
});
