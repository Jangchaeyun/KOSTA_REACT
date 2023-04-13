import { useState } from "react";
import Swal from "sweetalert2";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

const Signin = () => {
  const formStyle = {
    width: "500px",
    margin: "20px auto",
    border: "1px solid lightgray",
    padding: "30px",
    borderRadius: "7px",
  };

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const [signin, setSignin] = useState({
    id: "sally",
    password: "1234",
  });

  const submit = (e) => {
    if (id !== signin.id) {
      Swal.fire("아이디가 맞지 않습니다.");
      return;
    }
    if (pwd !== signin.password) {
      Swal.fire("비밀번호가 맞지 않습니다");
      return;
    }
    Swal.fire("로그인이 완료되었습니다!");
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
          <Input
            type="text"
            name="id"
            id="id"
            onChange={(e) => setId(e.target.value)}
          />
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
            onChange={(e) => setPwd(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={12}>
          <Button color="primary" style={{ width: "100%" }} onClick={submit}>
            로그인
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Signin;
