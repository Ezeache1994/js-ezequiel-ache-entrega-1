/*
const elH2 = document.getElementById("Titulo");
const elH6 = document.getElementById("para_volumen");
const CONTENEDOR_IMG = document.getElementById("Para_Imagen");
const IMG = document.getElementById("La_Imagen");
const cont_Descripcion = document.getElementById("La_Descripcion");
const Parrafo_Para_Describir = document.getElementById("Describeme");

const contenedor1 = document.getElementById("Contenedor_HTML_JS");



const Boton1_Robot = document.getElementById("Robotics");
const Boton2_Skate = document.getElementById("electric_skates");
const Boton3_juego = document.getElementById("Videojuego");

const Negocios2 = [
    { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Robotics_Barracas.png", Descripcion: "Negocio de robótica que desarrolla prótesis robóticas para humanos" },
    { id: 2, nombre: "Rio de la Plata electric skates", volumen: "90 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png", Descripcion: "Empresa Argentina que fabrica patines y patinetas que se movilizan de manera autónoma con energía solar" },
    { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Desarrollo_Nacional_Del_Videojuego.png", Descripcion: "Empresa Cordobesa de desarrollo de videojuegos para niños ciegos y inválidos" }
];

function mostrar_en_HTML(negocios) {
    for (const negocio of negocios) {
        const nuevoContenido = document.createElement("div");
        nuevoContenido.className = "contenido";

        Boton1_Robot.addEventListener("click",event=>{
            event.preventDefault();
            mostrar_en_HTML(Negocios2[0])
        })

        nuevoContenido.innerHTML = `
            <div  class="para_El_H2">
                <h2>${negocio.nombre}</h2>
                <hr>
                <h6>${negocio.volumen}</h6>
            </div>

            <figure  class="Para_Imagen">
                <img src="${negocio.img}" alt="${negocio.nombre}">
            </figure>

            <div  class="La_Descripcion">
                <p>${negocio.Descripcion}</p>
            </div>
        `;

        contenedor1.appendChild(nuevoContenido);
    }

};

mostrar_en_HTML(Negocios2);
*/

const contenedor1 = document.getElementById("Contenedor_HTML_JS");
const elH2 = document.getElementById("Titulo");
const elH6 = document.getElementById("para_volumen");
const CONTENEDOR_IMG = document.getElementById("Para_Imagen");
const IMG = document.getElementById("La_Imagen");
const cont_Descripcion = document.getElementById("Describeme");

const Boton1_Robot = document.getElementById("Robotics");
const Boton2_Skate = document.getElementById("electric_skates");
const Boton3_juego = document.getElementById("Videojuego");

const Negocios2 = [
    { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Robotics_Barracas.png", Descripcion: "Negocio de robótica que desarrolla prótesis robóticas para humanos" },
    { id: 2, nombre: "Rio de la Plata electric skates Argentinian S.A", volumen: "90 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png", Descripcion: "Empresa Argentina que fabrica patines y patinetas que se movilizan de manera autónoma con energía solar" },
    { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/niños_dev.png", Descripcion: "Empresa Cordobesa de desarrollo de videojuegos para niños ciegos y inválidos" }
];

function mostrar_en_HTML(negocios) {
    for (const negocio of negocios) {
        const nuevoContenido = document.createElement("div");
        nuevoContenido.className = "contenido";

        nuevoContenido.innerHTML = `
            <div class="para_El_H2">
                <h2 class="text-center">${negocio.nombre}</h2>
                <h6 class="text-center">${negocio.volumen}</h6>
            </div>

            <figure class="Para_Imagen text-center">
                <img src="${negocio.img}" alt="${negocio.nombre}">
            </figure>

            <div class="La_Descripcion">
                <p  class="p-2 text-center" >${negocio.Descripcion}</p>
            </div>
        `;

        contenedor1.appendChild(nuevoContenido);
    }
}






const getData = async (url) => {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const { Negocios2 } = datos;
        Boton1_Robot.addEventListener("click", () => mostrar_en_HTML([Negocios2[0]]));
        Boton2_Skate.addEventListener("click", () => mostrar_en_HTML([Negocios2[1]]));
        Boton3_juego.addEventListener("click", () => mostrar_en_HTML([Negocios2[2]]));
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

const Api_Url = "../db/db.json";
getData(Api_Url);




/*



// Obtener referencias a los elementos HTML relevantes
const contenedor1 = document.getElementById("Contenedor_HTML_JS");
const Boton1_Robot = document.getElementById("Robotics");
const Boton2_Skate = document.getElementById("electric_skates");
const Boton3_juego = document.getElementById("Videojuego");

// Definir la función para mostrar los elementos en HTML
function mostrar_en_HTML(negocio) {
    // Crear un nuevo contenido div para cada negocio
    const nuevoContenido = document.createElement("div");
    nuevoContenido.className = "contenido";

    // Agregar el contenido HTML para el negocio actual al nuevo div
    nuevoContenido.innerHTML = `
        <div class="para_El_H2">
            <h2>${negocio.nombre}</h2>
            <hr>
            <h6>${negocio.volumen}</h6>
        </div>
        <figure class="Para_Imagen">
            <img src="${negocio.img}" alt="${negocio.nombre}">
        </figure>
        <div class="La_Descripcion">
            <p>${negocio.Descripcion}</p>
        </div>
    `;

    // Limpiar el contenedor antes de agregar el nuevo contenido
    contenedor1.innerHTML = '';
    // Agregar el nuevo contenido al contenedor
    contenedor1.appendChild(nuevoContenido);
}

// Agregar event listeners a los botones para mostrar los elementos correspondientes
Boton1_Robot.addEventListener("click", function() {
    mostrar_en_HTML(Negocios2[0]);
});

Boton2_Skate.addEventListener("click", function() {
    mostrar_en_HTML(Negocios2[1]);
});

Boton3_juego.addEventListener("click", function() {
    mostrar_en_HTML(Negocios2[2]);
});

// Obtener datos del servidor al cargar la página
const getData = async (url) => {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const { Negocios2 } = datos;
        // Mostrar los elementos en HTML después de obtener los datos
        mostrar_en_HTML(Negocios2);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

const Api_Url = "../db/db.json";
console.log(Api_Url);
getData(Api_Url);









































































 --------------------------------------------------------------------------------------------
const elH2 = document.getElementById("Titulo");
const elH6 = document.getElementById("para_volumen");
const IMG = document.getElementById("La_Imagen");
const cont_Descripcion = document.getElementById("La_Descripcion");
const contenedor1 = document.getElementById("Contenedor_HTML_JS");

const Boton1_Robot = document.getElementById("Robotics");
const Boton2_Skate = document.getElementById("electric_skates");
const Boton3_juego = document.getElementById("Videojuego");

const Negocios2 = [
    { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Robotics_Barracas.png", Descripcion: "Negocio de robótica que desarrolla prótesis robóticas para humanos" },
    { id: 2, nombre: "Rio de la Plata electric skates", volumen: "90 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png", Descripcion: "Empresa Argentina que fabrica patines y patinetas que se movilizan de manera autónoma con energía solar" },
    { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Desarrollo_Nacional_Del_Videojuego.png", Descripcion: "Empresa Cordobesa de desarrollo de videojuegos para niños ciegos y inválidos" }
];

function mostrar_en_HTML(negocio) {
    elH2.textContent = negocio.nombre;
    elH6.textContent = negocio.volumen;
    IMG.src = negocio.img;
    IMG.alt = negocio.nombre;
    cont_Descripcion.textContent = negocio.Descripcion;
}

Boton1_Robot.addEventListener("click", function() {
    mostrar_en_HTML(Negocios2[0]);
    cont_Descripcion.parentElement.removeAttribute("hidden");
});

Boton2_Skate.addEventListener("click", function() {
    mostrar_en_HTML(Negocios2[1]);
    cont_Descripcion.parentElement.removeAttribute("hidden");
});

Boton3_juego.addEventListener("click", function() {
    mostrar_en_HTML(Negocios2[2]);
    cont_Descripcion.parentElement.removeAttribute("hidden");
});




*/















































/*

const elH2 = document.getElementById("Titulo");
const elH6 = document.getElementById("para_volumen"); // Modificado el ID
const CONTENEDOR_IMG = document.getElementById("Para_Imagen"); // Modificado el ID
const IMG = document.getElementById("La_Imagen");
const cont_Descripcion = document.getElementById("La_Descripcion");
const Parrafo_Para_Describir = document.getElementById("Describeme");

const contenedor1 = document.getElementById("Contenedor_HTML_JS");

const Negocios2 = [
    { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Robotics_Barracas.png", Descripcion: "Negocio de robótica que desarrolla prótesis robóticas para humanos" },
    { id: 2, nombre: "Rio de la Plata electric skates", volumen: "90 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png", Descripcion: "Empresa Argentina que fabrica patines y patinetas que se movilizan de manera autónoma con energía solar" },
    { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Desarrollo_Nacional_Del_Videojuego.png", Descripcion: "Empresa Cordobesa de desarrollo de videojuegos para niños ciegos y inválidos" }
];

function mostrar_en_HTML() {
    for (const negocio of Negocios2) {
        const nuevoContenido = document.createElement("div");
        nuevoContenido.className = "contenido";

        nuevoContenido.innerHTML = `

            <div class="para_El_H2">
                <h2>${negocio.nombre}</h2>
                
                <h6>${negocio.volumen}</h6>
            </div>

            <figure class="Para_Imagen">
                <img src="${negocio.img}" alt="${negocio.nombre}">
            </figure>

            <div class="La_Descripcion descripcion">
                <p>${negocio.Descripcion}</p>
            </div>
        `;

        contenedor1.appendChild(nuevoContenido);
    }
};

mostrar_en_HTML();

const getData =async (url)=>{
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const{Negocios2} = datos;
    mostrar_en_HTML(Negocios2);
}

const Api_Url= "../db/db.json";
getData(Api_Url);

*/



/*
const getData = async (url)=>{
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const { servicios } = datos;
    renderServicios(servicios)
}
const API_URL = "./db/db.json";
getData(API_URL);

*/










// const negocios2 = [
//     { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "./multimedia/imagenes/tecnologia/Robotics_Barracas.png" },
//     { id: 2, nombre: "Rio de la Plata electric skates", volumen: "90 millones de pesos al año", img: "./multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png" },
//     { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "./multimedia/imagenes/tecnologia/Desarrollo_Nacional_Del_Videojuego.png" }
// ];


//     fetch("../dv/db.json")
//     .then((res) => res.json())
//     .then((data) => {

//         console.log(data);
//     });


/* primer ejemplo de fetch */



/*
const lista1= document.getElementById("lista");

const contenedor1= document.getElementById("Containedor");






    const Negocios2 = [
    { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Robotics_Barracas.png" },
    

    { id: 2, nombre: "Rio de la Plata electric skates", volumen: "90 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png" },


    { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Desarrollo_Nacional_Del_Videojuego.png" },
    ];

    console.log(Negocios2);
*/

//DATOS LOCALES

// fetch("./db/db.json") 

// .then((response)=>response.json())

// .then((data)=>{

//     const {Negocios2} =data;

//     console.log(Negocios2);
// });





/*
console.log(Negocios2);

for(const negocio of Negocios2) {
    const li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `
        <h2>${negocio.nombre}</h2>
        <p>${negocio.volumen}</p>
        <img src="${negocio.img}" alt="${negocio.nombre}" />
    `;
    la_Lista.append(li);
}

*/












// const la_Lista= document.getElementById("lista");


// console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));

// fetch("https://jsonplaceholder.typicode.com/posts")

// .then((response=> response.json()))
// .then(data=>{
//     for(const post of data){
//         // console.log(post);
//         const li= document.createElement(`li`);
//         li.className=`card`;
//         li.innerHTML=`
//         <h2> ${post.title} </h2>
//         <p>${post.body}</p>`;
//         la_Lista.append(li);
//     }
    
// });

//DATOS LOCALES

/*

fetch("../db/db.json") 
.then(response=>response.json())
.then(data=>{
    const {Negocios2}=data;
    console.log(Negocios2);
});

*/


//DATOS LOCALES
// fetch("./db/db.json")
//   .then((res) => res.json())
//   .then((data) => {
//     const { servicios } = data;
//     console.log(servicios);
//     renderServicios(servicios)
//   });







//post Nosotros no podemos realizar un post sin un backend

/*

const Post = {
    id: 200,
    title: "Soy nuevo",
    body: "lorem"
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(Post),
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
}).then(response=>response.json())
.then(data=>{console.log(data)
});

*/













