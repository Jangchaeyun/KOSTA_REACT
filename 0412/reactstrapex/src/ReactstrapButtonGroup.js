import { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
const ReactstrapButtonGroup = () => {
  const [num, setNum] = useState(10);

  const move = (e) => {
    if (e.target.name == "+") setNum(num + 1);
    else if (e.target.name == "-") setNum(num - 1);
  };
  return (
    <div style={{ padding: "0px" }}>
      <ButtonGroup style={{ padding: "0px" }}>
        <Button onClick={move} name="-">
          -
        </Button>
        <Button onClick={move} name="+">
          +
        </Button>
      </ButtonGroup>
      <br />
      {num}
    </div>
  );
};

export default ReactstrapButtonGroup;
