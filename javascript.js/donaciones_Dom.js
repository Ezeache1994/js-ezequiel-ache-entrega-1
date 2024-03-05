//document.querySelector(para seleccionar un elemento desde html);

const botonAgricultura = document.querySelector("#Agricultura_Link");
const parrafoAgricultura = document.querySelector(".Item-To-Invest_Agriculture");

botonAgricultura.addEventListener("click", function(event) {
    event.preventDefault(); 
    parrafoAgricultura.removeAttribute("hidden");
});

/*------------------------------------------------------------------------------------------------------------------------------- */
const botonCine = document.querySelector("#Cine_Link");
const parrafoCine = document.querySelector(".Item-To-Invest_Cine");

botonCine.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    parrafoCine.removeAttribute("hidden");
});
/*------------------------------------------------------------------------------------------------------------------------------- */
const botonConstruccion = document.querySelector("#Construccion_Link");
const parrafoConstruccion = document.querySelector(".Item-To-Invest_Construccion");

botonConstruccion.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    parrafoConstruccion.removeAttribute("hidden");
});
/*------------------------------------------------------------------------------------------------------------------------------- */
const botonCocina = document.querySelector("#Cocina_Link");
const parrafoCocina = document.querySelector(".Item-To-Invest_Cocina");

botonCocina.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    parrafoCocina.removeAttribute("hidden");
});
/*------------------------------------------------------------------------------------------------------------------------------- */
const botonMusico = document.querySelector("#Musica_Link");
const parrafoMusico = document.querySelector(".Item-To-Invest_Musico");

botonMusico.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    parrafoMusico.removeAttribute("hidden");
});
/*------------------------------------------------------------------------------------------------------------------------------- */
const botonTecnologia = document.querySelector("#Tecnologia_Link");
const parrafoTecnologia = document.querySelector(".Item-To-Invest_Tecnologia");

botonTecnologia.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace se comporte como un enlace normal
    parrafoTecnologia.removeAttribute("hidden");
});







