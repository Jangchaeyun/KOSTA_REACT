import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ReactstrapForm = () => {
  return (
    <Form>
      <Label for="exampleGender">성별</Label>
      <Input type="select" bzsize="sm">
        <option>선택 안함</option>
        <option>여자</option>
        <option>남자</option>
      </Input>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleAddress">주소</Label>
            <Input type="text" name="address" id="address" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleAddress">전화번호</Label>
            <Input type="text" name="mobile" id="mobile" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleAddress">나이</Label>
            <Input type="text" name="age" id="age" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default ReactstrapForm;
