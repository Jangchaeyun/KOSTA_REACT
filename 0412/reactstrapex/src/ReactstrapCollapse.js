import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";

const ReactstrapCollapse = () => {
  return (
    <>
      <Button color="warning" id="toggle" style={{ marginBottom: "5px" }}>
        펼치기/접기
      </Button>
      <UncontrolledCollapse toggler="toggle">
        <Card style={{ width: "250px" }}>
          <CardBody>
            ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄹㄹㄹㄹㄹㄹㄹㄾㅌㅌㅌㅌㅌㅌㅌㅎㅎㅎㅎㅎ,
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      <div>하이하하이</div>
    </>
  );
};

export default ReactstrapCollapse;
