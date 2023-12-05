const person = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "je m appelle ${person.name} et je viens du campus de ${person.campus}",
    e: "oO",
    T: "U ",
  })
);
