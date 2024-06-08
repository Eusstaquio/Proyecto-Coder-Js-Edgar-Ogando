document.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        console.log('ss')
    } else {
        navbar.classList.remove('scrolled');
    }
} )

// me dio mucha pereza editar los cards en html, ademas iba a ser muchisimo codigo,
// asi que me hice una funcion para crear las cards de las peliculas, porfa digame si esto es buena practica o no.
fetch('../database.json')
    .then(response => response.json())
    .then(peliculas => {

        peliculas.forEach(element => {
            crearCardPelicula(element)
        })

    })
    .catch(error => {
        console.error('Error al obtener las películas', error);
        document.getElementById('contPeliculas').innerHTML = '<p>Error al cargar las películas.</p>';
    });

function crearCardPelicula(pelicula){

    const contPeliculas = document.querySelector(".contPeliculas");
    const card = document.createElement('div');

    card.classList.add('cardPelicula');

    card.innerHTML =`
    <div class="cardPelicula">
        <img src="./assets/${pelicula.image}" alt="imagen de ${pelicula.nombre}">
        <h4 class="nombrePelicula">${pelicula.nombre}</h4>
        <h5 class="generosPelicula">${pelicula.genero}</h5>
        <button class="cta pelicula-id botones" data-pelicula-id="1" >Comprar Taquillas</button>
    </div>
    `
    contPeliculas.appendChild(card)
}

//Aqui utilizo el local storage (lo guardo y luego lo saco en la pagina "shopping_cart.js")
document.addEventListener('DOMContentLoaded', () => {
    fetch('../database.json')
        .then(response => response.json())
        .then(peliculas =>{
            const buttons = document.querySelectorAll('.cta');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const peliculaId = parseInt(button.dataset.peliculaId);
                    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.id === peliculaId);
                    
                    if (peliculaSeleccionada) {
                        localStorage.setItem('peliculaSeleccionada', JSON.stringify(peliculaSeleccionada));
                        window.location.href = './pages/shopping-cart.html';
                    }
                });
            });
        })
});



