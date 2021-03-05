var numeri = [];

for (var i = 1; i <= 100; i++) {
  numeri.push(i);
}

console.log(numeri);

for (var i = 0; i < numeri.length; i++) {
  if (!(numeri[i]%3) && !(numeri[i]%5)) {
    numeri[i] = "FizzBuzz";
  }else if (!(numeri[i]%3)) {
    numeri[i] = "Fizz";
  } else if (!(numeri[i]%5)) {
    numeri[i] = "Buzz";
  }
}

console.log(numeri);
