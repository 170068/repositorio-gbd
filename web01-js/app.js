document.write("Hola mundo");

let texto = "Esto es un texto ";
let numero = 25;
let decimal = 5.4;
let booleano = true;

let array = ["Manuel", 23, "Rubio"];

let persona = {
    "nombre": "Manuel",
    "edad": 23,
    "cabello": "Rubio"
}


console.log(texto);
console.log(numero);
console.log(decimal);
console.log(booleano);
console.log(array);
console.log(persona.nombre);

//para acceder a los elementos del array utilizaremos su posicióon que parten desde valor 0
//por ejemplo en este caso manuel seria la posicion 0, 23 la posicion 2, y rubio la 3

console.log(array[1]);