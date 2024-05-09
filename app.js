// 2da pre entrega
// Tienes que hacer un simulador que tenga los siguientes temas:

// 1. Arreglos.
// 2. Funciones de orden superior.
// 3. Objetos.

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

let comboElegido = 0

const menu = {
    combo1 : 4,
    combo2 : 6,
    combo3 : 7,
    combo4 : 2,
}

let orden = parseInt(prompt(`Inserta el numero de lo que deseas ordenar:
1- Palomita grande + 2 sodas reg
2- Palomitas pequeñas + soda reg + hot dog
3- Palomitas pequeñas + 2 sodas gdes + nachos
4- Palomitas pequeñas + soda reg + snicker + hot dog`))

while (orden>4 || orden<1 || orden=== Number){
 alert ("Por favor, inserta un numero del 1-4")
 orden()
}

function calculoComida (orden){
    if(orden === 1){
        return menu['combo1']
    }else if(orden === 2){
        return menu['combo2']
    }else if(orden === 3){
        return menu['combo3']
    }else if(orden === 4){
        return menu['combo4']
    }
}

function cuentaFinal (callback){
    return `el total de tu cuenta es de ${callback()}`
}

alert(cuentaFinal(() => calculoComida(orden)));
