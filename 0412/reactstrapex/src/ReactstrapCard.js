import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const ReactStrapCard = () => {
  return (
    <Card>
      <CardImg
        top
        height={"200px"}
        src="https://mblogthumb-phinf.pstatic.net/MjAyMjA0MTRfMjY3/MDAxNjQ5OTE1MDY4NTM3.cChYjsVEWXmoFDA83NAtmWfZFDHmyqyHUIjMGGwpms4g.MKPVZmKQLNaBs5uBUoLZRxQkz3FABKmWfdQoCmyPQJ0g.JPEG.kma_131/GettyImages-jv11113318.jpg?type=w800"
        alt="Card image alt"
      />
      <CardBody>
        <CardTitle>Card 제목</CardTitle>
        <CardSubtitle>Card 부제목</CardSubtitle>
        <CardText>Card 내용 봄이 가요!!!!</CardText>
        <Button>버튼</Button>
      </CardBody>
    </Card>
  );
};

export default ReactStrapCard;
