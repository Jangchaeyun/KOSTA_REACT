function User(name) {
  this.name = name;
  this.isAdmin = false;
  return this;
}

let user = new User("hong");
console.log(user.name);
console.log(user.isAdmin);

function BigUser() {
  this.name = "원숭이";
  return { name: "고릴라" };
}

let buser = new BigUser();
console.log(buser.name);
