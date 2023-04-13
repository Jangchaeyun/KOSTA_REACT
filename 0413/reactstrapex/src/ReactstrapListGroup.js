import { Badge, ListGroup, ListGroupItem } from "reactstrap";

const ReactStrapListGroup = () => {
  return (
    <ListGroup style={{ width: "300px", margin: "10px auto" }}>
      <ListGroupItem
        active
        tag="a"
        href="https://www.samsunglions.com/"
        color="danger"
        className="justify-content-between"
      >
        SAMSUNG LIONS &nbsp;<Badge pill>14</Badge>
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="https://www.lgtwins.com/service/html.ncd?view=/pc_twins/twins_main/twins_main"
        color="light"
        className="justify-content-between"
      >
        LG TWINS &nbsp;<Badge pill>2</Badge>
      </ListGroupItem>
      <ListGroupItem
        tag="a"
        href="https://www.giantsclub.com/html/"
        color="warning"
        className="justify-content-between"
      >
        LOTTE GIANTS &nbsp;<Badge pill>1</Badge>
      </ListGroupItem>
    </ListGroup>
  );
};

export default ReactStrapListGroup;
