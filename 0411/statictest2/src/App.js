import { useState } from "react";

export default function FPersonInfo2() {
  const [person, setPerson] = useState({name: "hong", age: 20, height: 173.5, weight: 65);
  
  const changePerson = (e) => {
    setPerson({...person})
  }
  
  return (
    <>
      <label>이름:</label>
      <input
        type="text"
        name="name"
        onChange={changePerson}
      ></input>
      <label>나이:</label>
      <input
        type="text"
        name="age"
        onChange={changePerson}
      ></input>
      <label>키:</label>
      <input
        type="text"
        name="height"
        onChange={changePerson}
      ></input>
      <label>몸무게:</label>
      <input
        type="text"
        name="weight"
        onChange={changePerson}
      ></input>
      <h1>{`이름: ${person.name}, 나이: ${person.age}, 키: ${person.height}, 몸무게: ${person.weight}`}</h1>
    </>
  );
}
