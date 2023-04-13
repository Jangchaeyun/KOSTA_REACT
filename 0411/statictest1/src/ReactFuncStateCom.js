import { useState } from "react";
function ReactFuncStatement() {
  const [color, setColor] = useState("red");

  const changeColor = (e) => {
    setColor("Blue");
  };

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={changeColor}>
        Blue
      </button>
    </>
  );
}

export default ReactFuncStatement;
