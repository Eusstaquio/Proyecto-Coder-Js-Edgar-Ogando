export const shoppingCart = []

let comboElegido = 0

export const menu = [
    {
        nombre: "combo 1",
        descripcion: "Incluye: Palomita grande + 2 sodas reg",
        precio: 5
    },
    {
        nombre: "combo 2",
        descripcion: "Incluye: Palomitas pequeñas + soda reg + hot dog",
        precio: 5
    },
    {
        nombre: "combo 3",
        descripcion: "Palomitas pequeñas + 2 sodas gdes + nachos",
        precio: 7
    },
    {
        nombre: "combo 4",
        descripcion: "Palomitas pequeñas + soda reg + snicker + hot dog",
        precio: 8
    },
]


// export function calculoComida (orden){
//     if(orden === 1){
//         return menu['combo1']
//     }else if(orden === 2){
//         return menu['combo2']
//     }else if(orden === 3){
//         return menu['combo3']
//     }else if(orden === 4){
//         return menu['combo4']
//     }
// }

// export function cuentaFinal (callback){
//     return `el total de tu cuenta es de ${callback()}`
// }

// alert(cuentaFinal(() => calculoComida(orden)));