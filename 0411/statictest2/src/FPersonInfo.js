import { useState } from "react";

export default function FPersonInfo() {
  const [name, setName] = useState("hong");
  const [age, setAge] = useState(20);
  const [height, setHeight] = useState(163.3);
  const [weight, setWeight] = useState(58);
  return (
    <>
      <label>이름:</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>나이:</label>
      <input
        type="text"
        name="age"
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <label>키:</label>
      <input
        type="text"
        name="height"
        onChange={(e) => setHeight(e.target.value)}
      ></input>
      <label>몸무게:</label>
      <input
        type="text"
        name="weight"
        onChange={(e) => setWeight(e.target.value)}
      ></input>
      <h1>{`이름: ${name}, 나이: ${age}, 키: ${height}, 몸무게: ${weight}`}</h1>
    </>
  );
}
