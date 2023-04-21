// agregarle una propiedad a un array de objs 

/**
 * const array = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
    {
      name: 'Zulema',
      lastName: 'Vicente',
      age: 21
    },
]
 */

// agregar una propiedasd taxes: number

const array = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ]


// crear otra propiedad y calcular su valor , dado el precio de cada objt + 19%

function getArray(array){
  let porcentaje = 19;

    array.forEach(function(element,index){
       array[index].taxes = (element.price * 19) / 100; 
       console.log(element.taxes);
    })
    return array

}

console.log(
    getArray(array)
);
