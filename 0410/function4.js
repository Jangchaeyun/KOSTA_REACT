function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    return a + b;
  };

  this.mul = function () {
    return a * b;
  };
}

let calculator = new Calculator(20, 10);

console.log("sum = " + calculator.sum());
console.log("mul = " + calculator.mul());
