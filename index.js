//Juego Fibonacci

let Fibonacci = [0, 1];
let num
let noEsNumero = false;

while (!noEsNumero) {
  num = parseInt(prompt("Escriba un número: "));

  if (!isNaN(num)) {
    noEsNumero = true;
  } else {
    console.log("Error, escriba un número válido: ");
  }
}

for (let i = 2; i <= num; i++) {
  Fibonacci.push(Fibonacci[i - 1] + Fibonacci[i - 2]);
}
console.log(Fibonacci);

