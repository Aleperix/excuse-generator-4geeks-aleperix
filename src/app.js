/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  excuseGenerator();
  document.getElementById("pressme").addEventListener("click", excuseGenerator);
};

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator() {
  let result = who[Math.floor(Math.random() * who.length)] + " ";
  result += what[Math.floor(Math.random() * what.length)] + " ";
  result += when[Math.floor(Math.random() * when.length)] + "";
  document.getElementById("excuse").innerHTML = result;
}
