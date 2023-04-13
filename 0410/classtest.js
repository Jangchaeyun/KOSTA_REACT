class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name);
    console.log(this.age);
  }
}

let user = new User("hong", 20);
user.sayHi();
