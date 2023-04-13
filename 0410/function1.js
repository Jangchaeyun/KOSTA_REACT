function sayHi() {
  console.log("Hi");
  sayHi.counter++;
}

sayHi.counter = 0;
sayHi();
sayHi();
// console.log(sayHi.counter);

function makeConter() {
  counter.count = 0;
  function counter() {
    return counter.count++;
  }
  return counter;
}

let counter = new makeConter();
console.log(counter());
console.log(counter());
console.log(counter());
