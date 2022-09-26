/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Ejecutamos la función de generar excusa y agregamos el evento click al botón para generar otras.
window.onload = function() {
  excuseGenerator();
  document.getElementById("pressme").addEventListener("click", excuseGenerator);
};

//Definimos los Arrays que generaran las excusas aleatorias.
let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

//Función para generar las excusas, tomamos una posición de cada uno de los 3 Arrays y
//generamos una excusa concatenándolos en un string y mostrándolos en la etiqueta con
//el ID "excuse".
function excuseGenerator() {
  let result = who[Math.floor(Math.random() * who.length)] + " ";
  result += what[Math.floor(Math.random() * what.length)] + " ";
  result += when[Math.floor(Math.random() * when.length)] + "";
  document.getElementById("excuse").innerHTML = result;
}
