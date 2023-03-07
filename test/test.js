// 1

const nombre = "Christian";
const apellido = "Marin";
const edad = 25;
const correo = "chrismarin@gmail.com";
const ahorros = 20000;
const deudas = 500;
const mayorDeEdad = true;

console.log(nombre + " " + apellido);
console.log(ahorros - deudas);

// 2

Operaciones("Christian", "Marin", "dazzdev");
function Operaciones(name, lastname, nickname) {
    let firstname = name;
    let apellido = lastname;
    let fullName = firstname + " " + apellido;
    let user = nickname;

    return console.log("Mi nombre es " + fullName + ", pero prefiero que me digas " + user + ".");
}

// 3

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Basic") {
  return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  return console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else if (tipoDeSuscripcion === "Free") {
  return console.log("Solo puedes tomar los cursos gratis");
}

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

// 4
// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

let i = 0;
while (i < 5) {
    i++
    console.log("El valor de i es: " + i);
}

let e = 10;
while (e >= 2) {
    console.log(e)
    e--;
}