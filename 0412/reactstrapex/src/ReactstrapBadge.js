import { Badge, Button } from "reactstrap";

const ReactStrapBadge = () => {
  return (
    <>
      <h1>
        PRODUCT NAME <Badge color="secondary">hit</Badge>
        <Button color="info" outline>
          Accesor<Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>
          pill
        </Badge>
        <Badge href="http://naver.com" color="warning">
          네이버
        </Badge>
      </h1>
    </>
  );
};

export default ReactStrapBadge;
