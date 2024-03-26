


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










 const la_Lista = document.getElementById("lista");
 const Negocios2 = [
     { id: 1, nombre: "Robotics Barracas anonymous corporation", volumen: "300 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Robotics_Barracas.png" },
     { id: 2, nombre: "Rio de la Plata electric skates", volumen: "90 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Rio_de_la_Plata_electric_skates.png" },
     { id: 3, nombre: "Desarrollo Nacional Del Videojuego", volumen: "60 millones de pesos al año", img: "../multimedia/imagenes/tecnologia/Desarrollo_Nacional_Del_Videojuego.png" },
 ];

 console.log(Negocios2);


//DATOS LOCALES

 fetch("../db/db.json") 
 .then(response=>response.json())
 .then(data=>{
     const {Negocios2}=data;
     console.log(Negocios2);
 });























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













