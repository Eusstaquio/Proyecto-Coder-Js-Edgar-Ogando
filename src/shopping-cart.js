

    const peliculaId = JSON.parse(localStorage.getItem('peliculaSeleccionada'));


        if (!peliculaId || peliculaId == null){
            document.getElementById('#contenedorPelicula').innerHTML = '<p>Película no encontrada.</p>';
        }else{
            renderPelicula(peliculaId)

            setTimeout(()=>{
                funcionComprar(peliculaId)
            },.5)
        }


function renderPelicula (peliculaId){

    const contenedorPelicula = document.getElementById("contenedorPelicula");
    
    if (!contenedorPelicula || contenedorPelicula == null) {
        console.error('El contenedor de películas no se encontró en el DOM.');
        return;
    }
    
    contenedorPelicula.innerHTML =`
    <h1>${peliculaId.nombre}</h1>
    <img src='../assets/${peliculaId.image}' alt='${peliculaId.nombre}'>
    <h5>Generos: ${peliculaId.genero}</h5>
    <p>${peliculaId.sinopsis}</p>
    <h5>Sala: ${peliculaId.sala}</h5>
    <h5>Duración: ${peliculaId.duracion}</h5>
    <h5>Precio de taquilla: $${peliculaId.precio}</h5>
    
    <p>Horarios:</p>
    <ul>
    ${peliculaId.horarios.map(horario => `<li>${horario}</li>`).join('')}
    </ul>
    <form id="ticket-form">
    <label for="showtime">Seleccione el horario:</label>

    <select id="showtime" name="showtime">
    ${peliculaId.horarios.map(horario => `<option value="${horario}">${horario}</option>`).join('')}
    </select>

    <label for="cantidad">Cantidad de taquillas:</label>
    <input type="number" id="inputTaquillas" name="cantidad" min="1" max="10">
    <p class="totalPagar">Total a pagar: $ </p>
    <button  class="botones comprar" type="submit">Comprar</button>
    </form>
    `
}


function funcionComprar (pelicula) {

    const btnComprar = document.querySelector('.comprar');
    const inputTaquillas = document.getElementById('inputTaquillas')
    const contenedorTaquillas = document.getElementById('contenedorTaquillas')
    const totalPagar = document.querySelector('.totalPagar')
    console.log(inputTaquillas)
    if (!btnComprar || !inputTaquillas || !contenedorTaquillas || !totalPagar) {
        console.error('Uno de los elementos no se encontró en el DOM.'); 
        return;
    }

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




function codigoTaquillas (){
    return Math.floor(1000 + Math.random() * 9000)
}