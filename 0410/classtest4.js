class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, created) {
    super(name);
    this.created = Date.now;
  }
}

let rabbit = new Rabbit("흰 토끼");
console.log(rabbit.name);
