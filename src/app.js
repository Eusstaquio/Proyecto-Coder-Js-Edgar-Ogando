// pasos para arreglar mi 3ra preentrega
// crear pagina para hacer proceso de compra
// al clickar en una pelicula abrira la 2da pagina con la info y la logica de compra
// a priori necesitaré:
// • funcion para sumar entradas
// • logica de compra en el menu (funcion para sumar la comida)
// • funcion que sume el total final
// agregar local storage para guardar la orden
// Mi tercera pre entrega debe tener: DOM, eventos (obligartorio sustituir los prompts), localStorage y JSON

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

