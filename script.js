const h1 = document.querySelector('h1');
const parrafoWithClass = document.querySelector('.parrafo');
const parrafoWithId = document.querySelector('#parrafo');
const input = document.querySelector('#inputId');

// Cambiar texto del tag o cambiar el texto el cual podemos escribir también HTML.
// parrafoWithClass.innerHTML = "Cambiando el parrafo con JavaScritp <h3>Increible</h3>"
parrafoWithClass.innerText = "Cambiando el parrafo con JavaScritp <h3>Increible</h3>"

parrafoWithId.setAttribute("theworld", "is mine");
console.log(parrafoWithId.getAttribute("theworld"));

// heading 1
h1.classList.add("red");
h1.classList.add("blue");
h1.classList.remove("red");

// input
input.value = "2555";
input.id = "loCambie";

// create document
const img = document.createElement('img');
img.setAttribute('src', 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/08/Stitch-png-sin-Fondo.png');
img.setAttribute('alt', 'image');
// Primero dentro del hijo de h1
h1.prepend(img);
// Último dentro del hijo de h1
h1.append(img);

// Eventos en JavaScript
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btnClick = document.getElementById('btnCalcular');
const resultText = document.createElement('p');
let result;

form.addEventListener('click', btnOnClick);

function btnOnClick(e) {
    e.preventDefault();
    console.log(e)
    console.log(parseInt(input1.value, 10) + parseInt(input2.value, 10));
    result = parseInt(input1.value, 10) + parseInt(input2.value, 10);
    resultText.textContent = "El resultado es: " + result;
    form.appendChild(resultText);
    return;
}