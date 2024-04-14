alert(`Bienvenido/a a cineando
A continuaciôn tendrá 5 opciones de peliculas para elegir, puede elegir su pelicula marcando el numero correspondiente a la misma.`)

const peliculas = ['Capitan Avispa', 'Arthur', 'Dune parte 2', 'Godzilla y Kong: El nuevo imperio' ,'Kung Fu Panda 4']
const codigoTaquillas = Math.floor(1000 + Math.random() * 9000); 

function peliculaElegida(){

while(peliculas){

    let elegirPelicula = parseInt(prompt(`Elige la pelicula que deseas ver:
    1. ${peliculas[0]}
    2. ${peliculas[1]}
    3. ${peliculas[2]}
    4. ${peliculas[3]}
    5. ${peliculas[4]}`));

    let i = elegirPelicula - 1;

    if(i >=0 && i<6){

        let cantidadTaquillas = parseInt(prompt(`Has elegido la pelicula ${peliculas[i]}, cuantas taquillas quieres?`));

        if(cantidadTaquillas>0 && cantidadTaquillas<11){
            alert(`Haz elegido ${cantidadTaquillas} taquillas para la pelicula ${peliculas[i]}. Puedes retirarlas en el local con este codigo: A${codigoTaquillas} `)
            break
        }else{
            alert("Por favor ingresa un valor numerico mayor a 0 y menor a 10")
        }

    }else{
    alert("Por favor, asegurate de ingresar un valor numerico del 1 al 5")}
}
};

peliculaElegida();

// Hola Profe/tutor, aqui hay un par de cositas que no han dado en clases y que he buscado por mi cuenta,
//como los metodos para conseguir el codigo ramdom etc. Espero no sea ningun problema. :D
