

// const inicioSimulacion = document.querySelector("#btnInvertir");
// const firstLevelSimulation = document.querySelector(".Simulacion-1er-Nivel");

// inicioSimulacion.addEventListener("click", function(event) {
//     event.preventDefault();
//     firstLevelSimulation.removeAttribute("hidden");
// });

// /*
// logica de formularios
// */

// let Ingresar_nombre = document.querySelector("#ingresar_Nombre");
// let Ingresar_edad = document.querySelector("#ingresar_Edad");
// let mensaje_Oculto= document.querySelector(".mensaje_oculto-menor_edad");
// let Boton_Continuar1 = document.querySelector("#boton_Guardar_Variables");

// Boton_Continuar1.addEventListener("click", function(event) {    
//     event.preventDefault();
    
//     let edad = parseInt(Ingresar_edad.value);    
    
//     if (edad >= 18) {
        
//         console.log("El usuario es mayor de 18 años.");
//         Boton_Continuar1.removeAttribute("hidden");
//         mensaje_Oculto.setAttribute("hidden", "true");
//     } else {
//         mensaje_Oculto.removeAttribute("hidden");
//         console.log("El usuario es menor, No se realiza ninguna acción.");
//         return;
//     }
    
//     /* separacion de logica ---------------------------------------------------------------------------------------- */
//     localStorage.setItem("nombre", Ingresar_nombre.value);
//     localStorage.setItem("edad", edad);

//     /*----------------------------------------------------------------------------------------------------------------*/
//     const rubros= [
//         {nombre:"tecnologia",descripcion:"Rubro de Tecnologia"},
//         {nombre:"musica",descripcion:"rubro muscial"},
//         {nombre:"cocina",descripcion:"rubro culinario"},
//         {nombre:"construccion",descripcion:"rubro de la construccion"},
//         {nombre:"cine",descripcion:"rubro cinematografico"},
//         {nombre:"agricultura",descripcion:"rubro alimenticio"},
//     ];

//     const elegirRubro = document.querySelector("#rubro_seleccion");
//     const segundaSimulacion = Boton_Continuar1;

//     /* segunda simulacion inicio --------------------------------------------------------------------------------------------------------- */
    
//     segundaSimulacion.addEventListener("click",function(event){ /* segunda simulacion inicio de la logica entera */
//         event.preventDefault();
//         elegirRubro.removeAttribute("hidden");

//         /* variables para trabajar con el DOM----------------------------------------------------------------------------------------- */
        
//         const Elegir_Rubro_De_Tecnologia=document.querySelector("#tecnologia_escoger-rubro");
//         const Escoger_Negocios_Tecnologia=document.querySelector("#Negocios_Tecnologia");
        
//         /* escoger Donar o Invertir */
//         const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");
//         /* escoger Donar o Invertir */       

//          /* variables para trabajar con el DOM------------------------------------------------------------------------------------------------------------ */



//                 /*-------------------------------TECNOLOGIA---------------------------------------- */

//         /*separador de logica------------------------------------------------------------- */



//         Elegir_Rubro_De_Tecnologia.addEventListener("click",function(event){ /* inicio de la funcion Elegir_Rubro_De_Tecnologia  */  
//             event.preventDefault();
//             Escoger_Negocios_Tecnologia.removeAttribute("hidden");

//             /* guardar en el session */
//             const nombreRubro1 = "tecnologia"; 

//             const rubroSeleccionado1 = rubros.find(rubro => rubro.nombre === nombreRubro1);
        
//             if (rubroSeleccionado1) {
//                 sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado1.nombre);
//                 sessionStorage.setItem("descripcion", rubroSeleccionado1.descripcion);
//                 console.log("el rubro seleccionado es: "+rubroSeleccionado1.nombre);
//             };
            
            
//             /*escoger negocio de tecnologia--------------------------------------------------------------------------*/
// const Negocios_Tecnologia_descripcion = [
//     { Negocio: "Casa del Procesador", descripcion: "Fabrica de Procesadores" },
//     { Negocio: "Tech House", descripcion: "Negocio de fabricacion de Hardware industrial" },
//     { Negocio: "Micro-Develop", descripcion: "Consultora de desarrollo y programacion" }
// ];

// /* Negocio #1 de tecnologia empieza aqui------------------------------------------------------------------------------------------------------------- */
// const Elegir_Negocio_especifico_tecnologia_1 = document.querySelector("#tecno_1");

// Elegir_Negocio_especifico_tecnologia_1.addEventListener("click", function(event) {
//     event.preventDefault();
//     Escoger_Invertir.removeAttribute("hidden");

//     const negocioElegido1 = "Casa del Procesador";
//     const negocioTecnologicoEscogido1 = Negocios_Tecnologia_descripcion.find(negocio => negocio.Negocio === negocioElegido1);

//     if (negocioTecnologicoEscogido1) {
//         sessionStorage.setItem("Negocio tecnolgico escogido:", `${negocioTecnologicoEscogido1.Negocio}: ${negocioTecnologicoEscogido1.descripcion}`);
//         console.log(`Negocio escogido: ${negocioTecnologicoEscogido1.Negocio}, El negocio se dedica a: ${negocioTecnologicoEscogido1.descripcion}`);
//     };
    
// });


// /* Negocio #2 de tecnologia empieza aqui--------------------------------------------------------------------------------------------------------------------- */
// const Elegir_Negocio_especifico_tecnologia_2 = document.querySelector("#tecno_2");

// Elegir_Negocio_especifico_tecnologia_2.addEventListener("click", function(event) {
//     event.preventDefault();
//     Escoger_Invertir.removeAttribute("hidden");

//     const negocioElegido2 = "Tech House";
//     const negocioTecnologicoEscogido2 = Negocios_Tecnologia_descripcion.find(negocio => negocio.Negocio === negocioElegido2);

//     if (negocioTecnologicoEscogido2) {
//         sessionStorage.setItem("Negocio tecnolgico escogido:", `${negocioTecnologicoEscogido2.Negocio}: ${negocioTecnologicoEscogido2.descripcion}`);
//         console.log(`Negocio escogido: ${negocioTecnologicoEscogido2.Negocio}, El negocio se dedica a: ${negocioTecnologicoEscogido2.descripcion}`);
//     }
    
// });


// /* Negocio #3 de tecnologia empieza aqui -------------------------------------------------------------------------------------------------------------------------*/
// const Elegir_Negocio_especifico_tecnologia_3 = document.querySelector("#tecno_3");

//     Elegir_Negocio_especifico_tecnologia_3.addEventListener("click", function(event) {
//     event.preventDefault();
//     Escoger_Invertir.removeAttribute("hidden");

//     const negocioElegido3 = "Micro-Develop";
//     const negocioTecnologicoEscogido3 = Negocios_Tecnologia_descripcion.find(negocio => negocio.Negocio === negocioElegido3);

//     if (negocioTecnologicoEscogido3) {
//         sessionStorage.setItem("Negocio tecnolgico escogido:", `${negocioTecnologicoEscogido3.Negocio}: ${negocioTecnologicoEscogido3.descripcion}`);
//         console.log(`Negocio tecnolgico escogido: ${negocioTecnologicoEscogido3.Negocio}, El negocio se dedica a: ${negocioTecnologicoEscogido3.descripcion}`);
//     }

    
// });






// });


        


// /* Fin de negocios de Tecnologia----------------------------------------------------------------------------------------- */







//         /*-------------------------------MUSICA---------------------------------------- */
//         const Elegir_Rubro_De_Musica=document.querySelector("#musica_escoger-rubro");
//         const Escoger_Negocios_Musica=document.querySelector("#Negocios_Musica");

//         Elegir_Rubro_De_Musica.addEventListener("click",function(event){
//             event.preventDefault();
//             Escoger_Negocios_Musica.removeAttribute("hidden");

//             /*guardar rubro Musica----------------------------------------------------*/

//             const nombreRubro2 = "musica"; 

//             const rubroSeleccionado2 = rubros.find(rubro => rubro.nombre === nombreRubro2);
        
//             if (rubroSeleccionado2) {
//                 sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado2.nombre);
//                 sessionStorage.setItem("descripcion", rubroSeleccionado2.descripcion);
//                 console.log("el rubro seleccionado es: "+rubroSeleccionado2.nombre);
//             };
//             //const Escoger_Invertir=document.querySelector("#escoger_Donar_Invertir");



// const Negocios_Musica_Descripcion=[
//     {Artista:`Ricardio Moscaner`, descripcion:`Cantante de baladas romanticas`},
//     {Artista:`Los Caprichosos`, descripcion:`Banda de Rock nacional`},
//     {Artista:`Los Malibu`, descripcion:`Banda folclorica de Chamame`},
// ];


//             /* Negocio #1 de musica empieza aqui--------------------------------------------------------------------------------------------------------------------- */

//     //escoger especificamente negocio musical 1

//     const Elegir_Negocio_especifico_musica_1= document.querySelector("#Musical_1")

//     Elegir_Negocio_especifico_musica_1.addEventListener("click",function(event){
//         event.preventDefault();
//         Escoger_Invertir.removeAttribute("hidden");

//         /* guardar en el sessionStorage */

//         const artistaElegido1=`Ricardio Moscaner`;
//         const ArtistaEscogido1= Negocios_Musica_Descripcion.find(artista=>artista.Artista===artistaElegido1);

//         if(ArtistaEscogido1){
//             sessionStorage.setItem(`Artista escogido:`,`${ArtistaEscogido1.Artista}, el Artista escogido trabaja como:${ArtistaEscogido1.descripcion}`)
//             console.log(`Artista escogido:`,`${ArtistaEscogido1.Artista}, el Artista escogido trabaja como:${ArtistaEscogido1.descripcion}`);
//         }
//     });


//             /* Negocio #2 de musica empieza aqui--------------------------------------------------------------------------------------------------------------------- */
        
//             const Elegir_Negocio_especifico_musica_2= document.querySelector("#Musical_2")

//     Elegir_Negocio_especifico_musica_2.addEventListener("click",function(event){
//         event.preventDefault();
//         Escoger_Invertir.removeAttribute("hidden");

//         /* guardar en el sessionStorage */

//         const artistaElegido2=`Los Caprichosos`;
//         const ArtistaEscogido2= Negocios_Musica_Descripcion.find(artista=>artista.Artista===artistaElegido2);

//         if(ArtistaEscogido2){
//             sessionStorage.setItem(`Artista escogido:`,`${ArtistaEscogido2.Artista}, el Artista escogido trabaja como: ${ArtistaEscogido2.descripcion}`)
//             console.log(`Artista escogido:`,`${ArtistaEscogido2.Artista}, el Artista escogido trabaja como: ${ArtistaEscogido2.descripcion}`);
//         }
//     });
        
        
        
//             /* Negocio #3 de musica empieza aqui--------------------------------------------------------------------------------------------------------------------- */
//             const Elegir_Negocio_especifico_musica_3= document.querySelector("#Musical_3")

//             Elegir_Negocio_especifico_musica_3.addEventListener("click",function(event){
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
        
//                 /* guardar en el sessionStorage */
        
//                 const artistaElegido3=`Los Malibu`;
//                 const ArtistaEscogido3= Negocios_Musica_Descripcion.find(artista=>artista.Artista===artistaElegido3);
        
//                 if(ArtistaEscogido3){
//                     sessionStorage.setItem(`Artista escogido:`,`${ArtistaEscogido3.Artista}, el Artista escogido trabaja como:${ArtistaEscogido3.descripcion}`)
//                     console.log(`Artista escogido:`,`${ArtistaEscogido3.Artista}, el Artista escogido trabaja como:${ArtistaEscogido3.descripcion}`);
//                 }
//             });

//             /* Fin de negocios de musica----------------------------------------------------------------------------------------- */


//         });

//         /*-------------------------------COCINA---------------------------------------- */

//         const Elegir_Rubro_De_Cocina=document.querySelector("#cocina_escoger-rubro");
//         const Escoger_Negocios_Cocina=document.querySelector("#Negocios_Cocina");

//         Elegir_Rubro_De_Cocina.addEventListener("click",function(event){
//             event.preventDefault();
//             Escoger_Negocios_Cocina.removeAttribute("hidden");


//             /*guardar rubro cocina ------------------------------------------------------------------------------------------ */
//             const nombreRubro3 = "cocina"; 

//             const rubroSeleccionado3 = rubros.find(rubro => rubro.nombre === nombreRubro3);
        
//             if (rubroSeleccionado3) {
//                 sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado3.nombre);
//                 sessionStorage.setItem("descripcion", rubroSeleccionado3.descripcion);
//                 console.log("el rubro seleccionado es: "+rubroSeleccionado3.nombre);
//             };


//             //restaurantes disponibles

//             const Restaurantes_Disponibles = [
//                 { Restaurante: `La Lechuga Vegana`, descripcion: `Restaurante vegano para turistas` },
//                 { Restaurante: `El Choclo Feliz`, descripcion: `Restaurante tradicional Salteño` },
//                 { Restaurante: `La Pasta Flora`, descripcion: `Restaurante especializado en Pasteleria y Cafe` },
//             ];
            
//             // negocio de restauracion #1----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Restaurancion_1 = document.querySelector("#Restaurante_1");
            
//             Elegir_Negocio_Especifico_Restaurancion_1.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Restaurante_Elegido1 = "La Lechuga Vegana";
//                 const Restaurante_Escogido1 = Restaurantes_Disponibles.find(restaurant => restaurant.Restaurante === Restaurante_Elegido1);
            
//                 if (Restaurante_Escogido1) {
//                     sessionStorage.setItem(`Restaurante escogido:`, `${Restaurante_Escogido1.Restaurante}, se especializa en: ${Restaurante_Escogido1.descripcion}`);
//                     console.log(`Restaurante escogido: ${Restaurante_Escogido1.Restaurante}, se especializa en: ${Restaurante_Escogido1.descripcion}`);
//                 };;
//             });
            
//             // negocio de restauracion #2----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Restaurancion_2 = document.querySelector("#Restaurante_2");
            
//             Elegir_Negocio_Especifico_Restaurancion_2.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Restaurante_Elegido2 = "El Choclo Feliz";
//                 const Restaurante_Escogido2 = Restaurantes_Disponibles.find(restaurant => restaurant.Restaurante === Restaurante_Elegido2);
            
//                 if (Restaurante_Escogido2) {
//                     sessionStorage.setItem(`Restaurante escogido:`, `${Restaurante_Escogido2.Restaurante}, se especializa en: ${Restaurante_Escogido2.descripcion}`);
//                     console.log(`Restaurante escogido: ${Restaurante_Escogido2.Restaurante}, se especializa en: ${Restaurante_Escogido2.descripcion}`);
//                 };
//             });
            
//             // negocio de restauracion #3----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Restaurancion_3 = document.querySelector("#Restaurante_3");
            
//             Elegir_Negocio_Especifico_Restaurancion_3.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");

//                 //guardar aen 
            
//                 const Restaurante_Elegido3 = "La Pasta Flora";
//                 const Restaurante_Escogido3 = Restaurantes_Disponibles.find(restaurant => restaurant.Restaurante === Restaurante_Elegido3);
            
//                 if (Restaurante_Escogido3) {
//                     sessionStorage.setItem(`Restaurante escogido:`, `${Restaurante_Escogido3.Restaurante}, se especializa en: ${Restaurante_Escogido3.descripcion}`);
//                     console.log(`Restaurante escogido: ${Restaurante_Escogido3.Restaurante}, se especializa en: ${Restaurante_Escogido3.descripcion}`);
//                 };
//             });
//         });

//         /* Fin de negocios de cocina----------------------------------------------------------------------------------------- */



        

//         /*-------------------------------CONSTRUCCION---------------------------------------- */
//         const Elegir_Rubro_De_Construccion=document.querySelector("#construccion_escoger-rubro");
//         const Escoger_Negocios_Construccion=document.querySelector("#Negocios_Construccion");

//         Elegir_Rubro_De_Construccion.addEventListener("click",function(event){
//             event.preventDefault();
//             Escoger_Negocios_Construccion.removeAttribute("hidden");

//             /*guardar rubro Construccion*/

//             const nombreRubro4 = "construccion"; 

//             const rubroSeleccionado4 = rubros.find(rubro => rubro.nombre === nombreRubro4);
        
//             if (rubroSeleccionado4) {
//                 sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado4.nombre);
//                 sessionStorage.setItem("descripcion", rubroSeleccionado4.descripcion);
//                 console.log("el rubro seleccionado es: "+rubroSeleccionado4.nombre);
//             }; 



//             //restaurantes disponibles

//             const Constructora_Disponible = [
//                 { Constructora: `El Ladrillo Rosa`, descripcion: `Empresa Contratista de Construccion de Hogares` },
//                 { Constructora: `Casa del Albañil`, descripcion: `Distribuidora de cemento y materiales de construccion por delivery` },
//                 { Constructora: `The Brick`, descripcion: `Consultora de contratistas Profesionales.` },
//             ];
            
//             // negocio de construccion #1----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Construccion_1 = document.querySelector("#Obra_1");
            
//             Elegir_Negocio_Especifico_Construccion_1.addEventListener("click", function(event) {   
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Constructora_Elegida1 = "El Ladrillo Rosa";
//                 const Constructora_Escogido1 = Constructora_Disponible.find(constructor => constructor.Constructora === Constructora_Elegida1);
            
//                 if (Constructora_Escogido1) {
//                     sessionStorage.setItem(`Empresa Constructora escogida:`, `${Constructora_Escogido1.Constructora}, se especializa en: ${Constructora_Escogido1.descripcion}`);
//                     console.log(`Comercio escogido: ${Constructora_Escogido1.Constructora}, se especializa en: ${Constructora_Escogido1.descripcion}`);
//                 };;
//             });
            
//             // negocio de construccion #2----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Construccion_2 = document.querySelector("#Obra_2");
            
//             Elegir_Negocio_Especifico_Construccion_2.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Constructora_Elegida2 = "Casa del Albañil";
//                 const  Constructora_Escogido2= Constructora_Disponible.find(constructor => constructor.Constructora === Constructora_Elegida2);
            
//                 if (Constructora_Escogido2) {
//                     sessionStorage.setItem(`Empresa Constructora escogida:`, `${Constructora_Escogido2.Constructora}, se especializa en: ${Constructora_Escogido2.descripcion}`);
//                     console.log(`Comercio escogido: ${Constructora_Escogido2.Constructora}, se especializa en: ${Constructora_Escogido2.descripcion}`);
//                 };;
//             });
            
//             // negocio de construccion #3----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Construccion_3 = document.querySelector("#Obra_3");
            
//             Elegir_Negocio_Especifico_Construccion_3.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Constructora_Elegida3 = "The Brick";
//                 const  Constructora_Escogido3= Constructora_Disponible.find(constructor => constructor.Constructora === Constructora_Elegida3);
            
//                 if (Constructora_Escogido3) {
//                     sessionStorage.setItem(`Empresa Constructora escogida:`, `${Constructora_Escogido3.Constructora}, se especializa en: ${Constructora_Escogido3.descripcion}`);
//                     console.log(`Comercio escogido: ${Constructora_Escogido3.Constructora}, se especializa en: ${Constructora_Escogido3.descripcion}`);
//                 };;
//             });
//         });

//         /* Fin de negocios de construccion----------------------------------------------------------------------------------------- */





//         /*-------------------------------CINE---------------------------------------- */
//         const Elegir_Rubro_De_Cine=document.querySelector("#cine_escoger-rubro");
//         const Escoger_Negocios_Cine=document.querySelector("#Negocios_Cine");
        
//         Elegir_Rubro_De_Cine.addEventListener("click",function(event){
//             event.preventDefault();
//             Escoger_Negocios_Cine.removeAttribute("hidden");

//             /* Guardar rubro cine*/
//             const nombreRubro5 = "cine"; 

//             const rubroSeleccionado5 = rubros.find(rubro => rubro.nombre === nombreRubro5);
        
//             if (rubroSeleccionado5) {
//                 sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado5.nombre);
//                 sessionStorage.setItem("descripcion", rubroSeleccionado5.descripcion);
//                 console.log("el rubro seleccionado es: "+rubroSeleccionado5.nombre);
//             };


            

//             //peliculas disponibles.
//             const Peliculas_Disponible = [
//                 { Titulo_Cinematografico: `Cuello Cortado`, descripcion: `Pelicula de la Mafia Suiza` },
//                 { Titulo_Cinematografico: `La Pasion de Lupe`, descripcion: `Pelicula religiosa para ancianos` },
//                 { Titulo_Cinematografico: `Amor de Piojos`, descripcion: `Pelicula romantica entre el amor de un gato y un perro`},
//             ];
            
//             // negocio de cine #1----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Cine_1 = document.querySelector("#Pelicula_1");
            
//             Elegir_Negocio_Especifico_Cine_1.addEventListener("click", function(event) {   
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Peli_Elegida1 = "Cuello Cortado";
//                 const Peli_Escogido1 = Peliculas_Disponible.find(peli => peli.Titulo_Cinematografico === Peli_Elegida1);
            
//                 if (Peli_Escogido1) {
//                     sessionStorage.setItem(`Proyecto cinematografico escogido:`, `${Peli_Escogido1.Titulo_Cinematografico}, se especializa en: ${Peli_Escogido1.descripcion}`);
//                     console.log (`Proyecto cinematografico escogido:`, `${Peli_Escogido1.Titulo_Cinematografico}, se especializa en: ${Peli_Escogido1.descripcion}`);
//                 };;
//             });
            
//             // negocio de cine #2----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Cine_2 = document.querySelector("#Pelicula_2");
            
//             Elegir_Negocio_Especifico_Cine_2.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Peli_Elegida2 = "La Pasion de Lupe";
//                 const  Peli_Escogido2= Peliculas_Disponible.find(peli => peli.Titulo_Cinematografico === Peli_Elegida2);
            
//                 if (Peli_Escogido2) {
//                     sessionStorage.setItem(`Proyecto cinematografico escogido:`, `${Peli_Escogido2.Titulo_Cinematografico}, se especializa en: ${Peli_Escogido2.descripcion}`);
//                     console.log (`Proyecto cinematografico escogido:`, `${Peli_Escogido2.Titulo_Cinematografico}, se especializa en: ${Peli_Escogido2.descripcion}`);
//                 };;
//             });
            
//             // negocio de cine #3----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Cine_3 = document.querySelector("#Pelicula_3");
            
//             Elegir_Negocio_Especifico_Cine_3.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Peli_Elegida3 = "Amor de Piojos";
//                 const  Peli_Escogido3= Peliculas_Disponible.find(peli => peli.Titulo_Cinematografico === Peli_Elegida3);
            
//                 if (Peli_Escogido3) {
//                     sessionStorage.setItem(`Proyecto cinematografico escogido:`, `${Peli_Escogido3.Titulo_Cinematografico}, se especializa en: ${Peli_Escogido3.descripcion}`);
//                     console.log (`Proyecto cinematografico escogido:`, `${Peli_Escogido3.Titulo_Cinematografico}, se especializa en: ${Peli_Escogido3.descripcion}`);
//                 };;
//             });
//         });
//             /* Fin de negocios de Cine----------------------------------------------------------------------------------------- */



//         /*-------------------------------AGRICULTURA---------------------------------------- */
//         const Elegir_Rubro_De_Agro=document.querySelector("#agricultura_escoger-rubro");
//         const Escoger_Negocios_Agro=document.querySelector("#Negocios_Agro");

//         Elegir_Rubro_De_Agro.addEventListener("click",function(event){
//             event.preventDefault();
//             Escoger_Negocios_Agro.removeAttribute("hidden");

//             /*guardar rubro agricultura*/
//             const nombreRubro6 = "agricultura"; 

//             const rubroSeleccionado6 = rubros.find(rubro => rubro.nombre === nombreRubro6);
        
//             if (rubroSeleccionado6) {
//                 sessionStorage.setItem("rubroSeleccionado", rubroSeleccionado6.nombre);
//                 sessionStorage.setItem("descripcion", rubroSeleccionado6.descripcion);
//                 console.log("el rubro seleccionado es: "+rubroSeleccionado6.nombre);
//             }; 


//             //agricolas disponibles ---------------------------------------------------------------------

//             const Proyectos_Agricolas_Disponible = [
//                 { Proyectos_Agricolas: `La Espiguita`, descripcion: `Empresa que distribuye semillas por mayor` },
//                 { Proyectos_Agricolas: `Pesticidas Don Chicho`, descripcion: `Fabrica que distribuye pesticidas agricoals` },
//                 { Proyectos_Agricolas: `La Casa de la Oruga`, descripcion: `Empresa que asesora como cultivar verduras organicas`},
//             ];
            
//             // negocio de agro #1----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Agricola_1 = document.querySelector("#Agricultor_1");
            
//             Elegir_Negocio_Especifico_Agricola_1.addEventListener("click", function(event) {   
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Agro_Elegido1 = "La Espiguita";
//                 const Agro_Escogido1 = Proyectos_Agricolas_Disponible.find(agro => agro.Proyectos_Agricolas === Agro_Elegido1);

            
//                 if (Agro_Escogido1) {
//                     sessionStorage.setItem(`Proyecto Agro escogido:`, `${Agro_Escogido1.Proyectos_Agricolas}, se especializa en: ${Agro_Escogido1.descripcion}`);
//                     console.log (`Proyecto Agro escogido:`, `${Agro_Escogido1.Proyectos_Agricolas}, se especializa en: ${Agro_Escogido1.descripcion}`);
//                 };;
//             });
            
//             // negocio de agro #2----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Agricola_2 = document.querySelector("#Agricultor_2");
            
//             Elegir_Negocio_Especifico_Agricola_2.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const Agro_Elegido2 = "Pesticidas Don Chicho";
//                 const Agro_Escogido2 = Proyectos_Agricolas_Disponible.find(agro => agro.Proyectos_Agricolas === Agro_Elegido2);

            
//                 if (Agro_Escogido2) {
//                     sessionStorage.setItem(`Proyecto Agro escogido:`, `${Agro_Escogido2.Proyectos_Agricolas}, se especializa en: ${Agro_Escogido2.descripcion}`);

//                     console.log (`Proyecto Agro escogido:`, `${Agro_Escogido2.Proyectos_Agricolas_Disponible}, se especializa en: ${Agro_Escogido2.descripcion}`);
//                 };;

//             });
            
//             // negocio de agro #3----------------------------------------------------------------
            
//             const Elegir_Negocio_Especifico_Agricola_3 = document.querySelector("#Agricultor_3");
            
//             Elegir_Negocio_Especifico_Agricola_3.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 Escoger_Invertir.removeAttribute("hidden");
            
//                 const   Agro_Elegido3 = "La Casa de la Oruga";
//                 const Agro_Escogido3 = Proyectos_Agricolas_Disponible.find(agro => agro.Proyectos_Agricolas === Agro_Elegido3);  
            
//                 if (Agro_Escogido3) {
//                     sessionStorage.setItem(`Proyecto Agro escogido:`, `${Agro_Escogido3.Proyectos_Agricolas}, se especializa en: ${Agro_Escogido3.descripcion}`);

//                     console.log (`Proyecto Agro escogido:`, `${Agro_Escogido3.Proyectos_Agricolas}, se especializa en: ${Agro_Escogido3.descripcion}`);
//                 };;
//             });
//         });

//         /* Fin de negocios de Agricultura----------------------------------------------------------------------------------------- */});

//        // Manejador de evento para el botón de finalizar transacción

//        const Boton_Final_Transaccion = document.querySelector("#Final_De_Transaccion");

//        Boton_Final_Transaccion.addEventListener("click", function() {
//            let monto_Ingresado = document.querySelector("#Formulario_Monto").value;
//            let Dinero_Donado = parseFloat(monto_Ingresado);
//            let iva = 0.21;
       
//            if (!isNaN(Dinero_Donado) && Dinero_Donado > 0) {
//                let transaccion_Final = Dinero_Donado * iva + Dinero_Donado;
               
//                // Obtener la selección de rubro y negocio
//                let rubroSeleccionado = sessionStorage.getItem("rubroSeleccionado");
//                let negocioSeleccionado = sessionStorage.getItem("Negocio tecnolgico escogido:");
//                let negocioSeleccionado_Resumen = sessionStorage.getItem("Artista escogido:");
       
//                // Mostrar alertas con el resumen de la transacción
//             alert("Rubro seleccionado: " + rubroSeleccionado);
//             alert("Negocio seleccionado: " + negocioSeleccionado);
//             alert("Negocio seleccionado: " + negocioSeleccionado_Resumen);
//             alert("Monto donado: " + transaccion_Final);
       
//                // Mostrar la card de resumen
//                alert("Se ha mostrado el resumen de la transacción.");
//            } else {
//                alert("Por favor, ingresa un monto válido.");
//            }
//        });
       


        
        
//     });