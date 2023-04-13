class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `이름: ${this.name}, 나이: ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    //  this.name = name;
    //  this.age = age;
    super(name, age);
    this.subject = subject;
  }
  info() {
    return `이름: ${this.name}, 나이: ${this.age}, 학과: ${this.subject}`;
  }
}

let person = new Person("hong", 20);
console.log(person.info());
// 이름: hong, 나이: 20

let student = new Student("park", 30, "산업디자인");
console.log(student.info());
