
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
    <input type="number" id="inputTaquillas" name="cantidad" min="1" max="10">
    <p class="totalPagar">Total a pagar: $ </p>
    <button  class="botones comprar" type="submit">Comprar</button>
    </form>
    `
}


function funcionComprar (pelicula){

    const btnComprar = document.querySelector('.comprar');
    const inputTaquillas = document.getElementById('inputTaquillas')
    const contenedorTaquillas = document.getElementById('contenedorTaquillas')
    const totalPagar = document.querySelector('.totalPagar')

    inputTaquillas.addEventListener('input', () =>{
        const cantidad = parseInt(inputTaquillas.value) || 0;
        const total = cantidad * pelicula.precio;
        totalPagar.textContent = `Total a pagar: $${total}`;
    })
    
    btnComprar.addEventListener('click', (event)=>{
        event.preventDefault()
        const cantidad = parseInt(inputTaquillas.value);
        const total = cantidad * pelicula.precio;
        
        if (cantidad > 0) {
            contenedorTaquillas.innerHTML = `<p>Su compra ha sido realizada de manera exitosa.
            Puedes recoger tus taquillas con este codigo: ${codigoTaquillas()}</p>`
        } else {
            contenedorTaquillas.innerHTML = `<p>Ingrese una cantidad válida.</p>`;
        }

    })
}

document.addEventListener('DOMContentLoaded', ()=> {

    const peliculaId = JSON.parse(localStorage.getItem('peliculaSeleccionada'));

    fetch('../database.json')
        .then(response => response.json())
        .then(peliculas => {
            
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
        .catch(error => {
            console.error('Error al obtener las películas:', error);
            document.getElementById('contenedorPelicula').innerHTML = '<p>Error al cargar las películas.</p>';
        });
})


function codigoTaquillas (){
    return Math.floor(1000 + Math.random() * 9000)
}