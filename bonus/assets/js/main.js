numero = prompt("dammi un numero tra 1  e 100:");

if (!(numero%3) && !(numero%5)) {
  numero = "FizzBuzz";
  document.body.style.backgroundImage = "url('./assets/img/oro.jpg')";
  document.body.style.backgroundSize = "cover";
}else if (!(numero%3)) {
  numero = "Fizz";
  document.body.style.backgroundImage = "url('./assets/img/bronzo.jpg')";
  document.body.style.backgroundSize = "cover";
} else if (!(numero%5)) {
  numero = "Buzz";
  document.body.style.backgroundImage = "url('./assets/img/argento.jpg')";
  document.body.style.backgroundSize = "cover";
}

console.log(numero);

document.getElementById("nr").innerHTML = numero;
