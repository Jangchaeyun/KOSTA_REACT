import { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import Swal from "sweetalert2";
const Signup = () => {
  const formStyle = {
    width: "500px",
    margin: "20px auto",
    border: "1px solid lightgray",
    padding: "30px",
    borderRadius: "7px",
  };

  const [signup, setSignup] = useState({
    id: "",
    name: "",
    password: "",
  });

  const changeInput = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    let register = { ...signup };
    console.log(register);
    Swal.fire("회원가입이 완료되었습니다!");
    e.preventDefault();
  };

  return (
    <Form style={formStyle}>
      <h4 style={{ textAlign: "center" }}>회원가입</h4>
      <br />
      <FormGroup row>
        <Label for="id" sm={3}>
          아이디
        </Label>
        <Col sm={9}>
          <Input type="text" name="id" id="id" onChange={changeInput} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="name" sm={3}>
          이름
        </Label>
        <Col sm={9}>
          <Input type="text" name="name" id="name" onChange={changeInput} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={3}>
          비밀번호
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="password"
            id="password"
            onChange={changeInput}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={12}>
          <Button color="primary" style={{ width: "100%" }} onClick={submit}>
            회원가입
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Signup;
