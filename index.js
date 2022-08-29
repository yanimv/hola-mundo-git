let nombre = "Yanina Martínez";
let edad = calcularEdad(2000);
console.log("Hola " + nombre);
console.log(nombre + " tiene " + edad + " años");
console.log("Se le pagará: "+calcularSalario(8, 30000));

function calcularEdad(anioNac){
    return new Date().getFullYear() - anioNac;
}

function calcularSalario(horasTrabajadas, monotoPorHora){
    return horasTrabajadas * monotoPorHora;
}