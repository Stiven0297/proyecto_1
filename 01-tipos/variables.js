//Tipos de variables primitivas:
let nombre = "DayanaZ";
let edad = 14;
let esVegetariana = true;
let noDefinido;
let noDefinido2 = undefined;
let nulo = null;

//typeof nos permite ver el tipo de variable
console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(esVegetariana));
console.log(typeof(noDefinido));
console.log(typeof(noDefinido2));
console.log(typeof(nulo));
console.log(nulo);

//Tipos de variables de referencia:
let lista = [1,2,3,4,5,6,7,8,9];
console.log(lista[8]);
let mascotas = ["Copper","Negro","Michi","Zoro"];
console.log(mascotas[2]);

let animal = {
    nombre: "Copper", 
    edad: 5, 
    sexo: "Macho", 
    vegetariano: false
};
console.log(animal);
