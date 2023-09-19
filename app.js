//todo: hacer el front de la calculadora
const process = require("process");
const restar = require("./restar");
const { argv } = process;
const sumar = require("./sumar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

function caluladora(comando, a, b) {
  switch (comando) {
    case "sumar":
      return sumar(a, b);
    case "restar":
      return restar(a, b);
    case "multiplicar":
      return multiplicar(a,b);
    case "dividir":
      return dividir(a,b);
    default:
      return "comando no válido";
  }
}

console.log(caluladora(argv[2], +argv[3], +argv[4]));
