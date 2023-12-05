const person = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "je m appelle Eric et je viens du campus de Lyon",
    e: "oO",
    T: "U ",
  })
);
