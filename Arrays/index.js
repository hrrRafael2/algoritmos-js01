// Multiplica todos los elementos por dos
/**
 * Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos.
 */

const array = [2, 4, 5, 6, 8];

function mulriElements(array){
    const r = array.map( function(numero){
         return numero * 2;
    })
    return r;
}
console.log(
mulriElements(array)
);