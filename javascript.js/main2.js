// const ApretarBoton = document.getElementById("btnInvertir");

// const simulacion = () => {
//     const edad_Comparacion = () => {
//         let NombreUsuario = prompt(`Ingrese su Nombre y Apellido`);
//         let EdadUsuario = parseInt(prompt(`Ingrese su edad por favor ${NombreUsuario}`));
        
//         if (EdadUsuario <= 17) {
//             alert(`Usted es menor de edad, no podemos continuar`);
//             return null;
//         } else {
//             alert(`Bienvenido seas ${NombreUsuario}, su edad es ${EdadUsuario}. Podemos continuar.`);
//             return NombreUsuario; 
//         }
//     };

//     let NombreUsuario = edad_Comparacion(); 

//     if (NombreUsuario) {
//         class Rubros {
//             constructor() {
//                 this.Rubros_Disponibles = [`Tecnologia`, `Musica`, `Comida`, `Hogar`];
//                 this.Negocios_Disponibles = [];
//             }

//             Escoger_Rubros_Disponibles() {
//                 let Accion_Escoger_Rubros_Disponibles = prompt(`Hola, ${NombreUsuario}. Este es el momento en el que debes escoger los rubros en los que vas a invertir:
                
//                 1) Tecnologia.
//                 2) Musica.
//                 3) Comida.
//                 4) Hogar.
                
//                 De lo contrario, si quieres finalizar, escribe 'finalizar' y finalizamos la simulacion.
//                 `);
//                 let Rubro_Escogido = null;

//                 while (true) {
//                     if (Accion_Escoger_Rubros_Disponibles === `finalizar`) {
//                         alert(`Simulacion finalizada`);
//                         break;
//                     } else if (this.Rubros_Disponibles.includes(Accion_Escoger_Rubros_Disponibles)) {
//                         Rubro_Escogido = Accion_Escoger_Rubros_Disponibles;
//                         alert(`Haz escogido el rubro ${Rubro_Escogido}`);
//                         break;
//                     } else {
//                         alert(`Debes escoger un rubro válido`);
//                         let Accion_Escoger_Rubros_Disponibles = prompt(`Hola, ${NombreUsuario}. Este es el momento en el que debes escoger los rubros en los que vas a invertir:
                
//                 1) Tecnologia.
//                 2) Musica.
//                 3) Comida.
//                 4) Hogar.
                
//                 De lo contrario, si quieres finalizar, escribe 'finalizar' y finalizamos la simulacion.
//                 `);
//                 return;
//                     }
//                 }
//             }
//         }

//         const rubros = new Rubros();
//         rubros.Escoger_Rubros_Disponibles();
//     }
// };

// simulacion();
// ApretarBoton.addEventListener(`click`, simulacion);



