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


document.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        console.log('ss')
    } else {
        navbar.classList.remove('scrolled');
    }
} )
