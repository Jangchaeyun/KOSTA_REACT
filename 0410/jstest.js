let obj = { name: "hong", num: 1, weight: 72.3 };
let { name, num, weight } = obj;
console.log(name);
console.log(num);
console.log(weight);

function func() {
  return [10, 20, 30];
}

console.log(a);
console.log(b);

// let obj2 = obj;
// obj.name = "song";
// console.log(obj);
// console.log(obj2);

let obj3 = { ...obj, name: "song" };
console.log(obj);
console.log(obj3);
