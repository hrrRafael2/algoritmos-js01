/**
 * Tu reto es retornar un array solo con las palabras que cumplan con
 *  la condición de tener un término de búsqueda dado.

Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los 
siguientes parámetros de entrada:

array: Un array de strigs con palabras
term: Un string con el término a buscar
Dentro del cuerpo de la función filterByTerm debes escribir tu solución.

Ejemplo 1:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "ana"

Ouput:
["ana", "anastasia"]

Ejemplo 2:

Input:
array: ["ana", "santi", "nico", "anastasia"]
term: "xyz"

Output:
[]
 */


// que haras?
/**
 * 1. Medir la longitud de la palabra a buscar
 * 2. con el metodo forEch buscaria la palabra en el array
 * 3. crearia una condicion que si la longutud de la palabra es igual a la palabra ya no
 * buscaria, peri si en la primera busqueda la palabra no es igual, haria otra busqueda del 0,3 al 3,6
 */

const array = ["ana", "santi", "nico", "anastasia"]
const termino = 'ana'

function long(array,termino){
    let arrayNew = [];

    let longTerm = termino.length;
    console.log(longTerm);

    array.forEach(function(elemento, indice) {
        // console.log(`El elemento ${elemento} está en la posición ${indice}`);
        if(elemento.length === longTerm){
           arrayNew = termino.includes(elemento)
            console.log(elemento)
        }
        else if(elemento.length <= longTerm){

           let result = elemento.substring(0, 3);
            console.log(
                " 0 a 3 "+result
            )
        }
        else if( elemento.length >= longTerm && elemento.length <=(longTerm*2)){
            let result2 = elemento.substring(0,6);
            console.log(
                " 0 a 6 ",elemento
            )
        }
        else if(elemento.length > 6){
            let result3 = elemento.substring(0,6);
            console.log(
                "6...",elemento
            )
        }

    });

    return arrayNew;
    
}

console.log(
    long(array,termino)
)