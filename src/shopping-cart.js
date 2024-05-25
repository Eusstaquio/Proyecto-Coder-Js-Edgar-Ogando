
export const peliculas = [
    {
    id: 1,
    nombre: 'Capitan Avispa',
    image: "pelicula1.jpeg",
    sinopsis: "", 
    duracion: "1 hr y 27 min",
    genero: "Comedia Infantil, Aventura",
    sala: 1,
    horarios: ["6:00 PM", "8:00 PM", "10:00 PM"],
    precio: 6,
    },
    {
    id: 2,
    nombre: 'Arthur',
    image: "pelicula2.jpg",
    sinopsis: "", 
    duracion: "1 hr 44 min",
    genero: "Drama, Aventura",
    sala: 2,
    horarios: ["6:00 PM", "8:00 PM", "10:00 PM"],
    precio: 6,
    },
    {
    id: 3,
    nombre: 'IF',
    image: "pelicula3.webp",
    sinopsis: "", 
    duracion: "1 hora y 27 mins",
    genero: "Familiar, Comedia, Fantasia",
    sala: 3,
    horarios: ["6:00 PM", "8:00 PM", "10:00 PM"],
    precio: 6,
    },
    {
    id: 4,
    nombre: 'Deadpool & Wolverine',
    image: "pelicula4.jpg",
    sinopsis: "", 
    duracion: "2 hr 12 min",
    genero: "Accion, Comedia, Aventura",
    sala: 4,
    horarios: ["6:00 PM", "8:00 PM", "10:00 PM"],
    precio: 6,
    },
    {
    id: 5,
    nombre: 'The Strangers: Chapter 1',
    image: "pelicula5.jpg",
    sinopsis: "", 
    duracion: "1 hr 31 min",
    genero: "Horror, Thriller",
    sala: 5,
    horarios: ["6:00 PM", "8:00 PM", "10:00 PM"],
    precio: 6,
    }
]

function renderPelicula (pelicula){

    const contenedorPelicula = document.getElementById("contenedorPelicula");
    
    contenedorPelicula.innerHTML =`
    <h1>${pelicula.nombre}</h1>
    <img src='../assets/${pelicula.image}' alt='${pelicula.nombre}'>
    <h5>Generos: ${pelicula.genero}</h5>
    <p>${pelicula.sinopsis}</p>
    <h5>Sala: ${pelicula.sala}</h5>
    <h5>Duración: ${pelicula.duracion}</h5>
    <h5>Precio de taquilla: $${pelicula.precio}</h5>
    
    <p>Horarios:</p>
    <ul>
    ${pelicula.horarios.map(horario => `<li>${horario}</li>`).join('')}
    </ul>
    <form id="ticket-form">
    <label for="showtime">Seleccione el horario:</label>

    <select id="showtime" name="showtime">
    ${pelicula.horarios.map(horario => `<option value="${horario}">${horario}</option>`).join('')}
    </select>

    <label for="cantidad">Cantidad de taquillas:</label>
    <input type="number" id="cantidadTaquillas" name="cantidad" min="1" max="10">
    <button  class="botones comprar" type="submit">Comprar</button>
    </form>
    `
}


function funcionComprar (pelicula){
    const btnComprar = document.querySelector('.comprar');
    const numTaquillas = document.getElementById('cantidadTaquillas')
    const contenedorTaquillas = document.getElementById('contenedorTaquillas')
    
    btnComprar.addEventListener('click', (event)=>{
        event.preventDefault()
        const cantidad = parseInt(numTaquillas.value, 10);
        const total = cantidad * pelicula.precio;
        


        if (cantidad > 0) {
            contenedorTaquillas.innerHTML = `<p>Su compra ha sido realizada de manera exitosa
            el total a pagar es de: $${total}</p>`;
        } else {
            contenedorTaquillas.innerHTML = `<p>Ingrese una cantidad válida.</p>`;
        }
    })
}

document.addEventListener('DOMContentLoaded', ()=> {

    const peliculaId = JSON.parse(localStorage.getItem('peliculaSeleccionada'));
    const pelicula = peliculas.find(e => e.id == peliculaId.id);
    
    if(pelicula) {
        renderPelicula(pelicula)
        setTimeout(() =>{
            funcionComprar(pelicula)
        }, 0)
    } else {
        document.getElementById('contenedorPelicula').innerHTML = '<p>Película no encontrada.</p>';
    }
})


//Me quede buscando la manera de llamar a la funcion cuando el contenido haya cargado
//Pero recuerda que tienes que hacer que ese evento se dispare al clickar el cta por ende ya habra 
//cargado el contenido, sino no habria como presionar el boton.




    // function codigoTaquillas (){
    //     return Math.floor(1000 + Math.random() * 9000)
    // }