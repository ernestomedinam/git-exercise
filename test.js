console.log("este es el resultado:", multiplicar(1,16));
console.log(saludar());

let names = [
    "Pedro",
    "Daniela",
    "Bryan",
    "Deimian",
    "Wilfredo",
    "Ernesto",
    "Robianna",
    "Valeria",
    "Mariano"
];



names.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
// console.log(names);


function sayHello(personName) {
    let salutation = "Hola, " + personName + ", ¿cómo estás?"
    // console.log(salutation);
    return  salutation.toLowerCase();
}

function sumar(sumando1, sumando2) {
    return sumando1 + sumando2;
}

function multiplicar(factor1, factor2) {
    return factor1 * factor2;
}

// const resultadoSuma1 = sumar(25, 36);
// var resultadoSuma2 = sumar(10, 8);
// let resultado = multiplicar(resultadoSuma1, resultadoSuma2);



let saludar = function () {
    console.log(arguments); // ["mi tio", "mi mama", "mi papa"]
    for (let i = 0; i < arguments.length; i++) {
        console.log("Hello " + arguments[i]);
    }
}

let saludarFlecha = (...args) => {
    console.log(args);
    return "Hello";
};

saludarFlecha("mi tio", "mi mama", "mi papa", "mi hermano");


// console.log(saludarFlecha);



// for (condicion inicial; condicion critica; variacion)
// for (let index = 0; index < names.length; index++) {
//     if (names[index].startsWith("D")) {
//         console.log("Lo siento, yo no hablo con Ds.");
//     } else if (names[index].startsWith("R")) {
//         console.log("lo siento, con Rs tampoco.");
//     } else {
//         console.log(sayHello(names[index]));
//     }
// }

// let numbers = [3, 2, 6, 10]
// for (let number of numbers) {
//     if (number % 3 === 0 && number % 2 === 0) {
//         console.log("es multiplo de 3")
//     } else if (number % 2 === 0) {
//         console.log("es multiplo de 2")
//     } else if (number % 3 === 0) {
//         console.log("es multiplo de ambos");
//     } else {
//         console.log("no es multiplo de ninguno");
//     }
// }

// console.log(5 > 1 && 5 < 7 && 5 % 5 === 0);
// console.log(true && true && true);
// console.log(false && false);

// console.log(false || true || true);

// console.log(
//     (5 == "5" && 7 < 6) ||
//     (true == false || 1 === 1) ||
//     ((true == true || 3 < 10) && true == true)
// );

// if (
//     (5 == "5" && 7 < 6) ||
//     (true == false || 1 === 1) ||
//     ((true == true || 3 < 10) && true == true)
// ) {
//     console.log("esta es la prueba de que entro en el if")
// }

// //    (condition)
// //        ? // if true
// //        : // else

// (5 < 3) 
//     ? console.log("a")
//     : console.log("b")