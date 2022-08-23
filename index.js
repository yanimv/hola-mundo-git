let nombre = "Juan Pérez";
let edad = calcularEdad(2000);
console.log("Hola " + nombre);
console.log(nombre + " tiene " + edad + " años");

function calcularEdad(anioNac){
    return new Date().getFullYear() - anioNac;
}