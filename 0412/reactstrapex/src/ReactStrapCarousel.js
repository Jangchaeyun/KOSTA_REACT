import { UncontrolledCarousel } from "reactstrap";

const ReactStrapCarousel = () => {
  const items = [
    {
      src: "../public/food1.png",
      alert: "음식1",
      caption: "나는 음식1입니다.",
      heaer: "음식1",
    },
    {
      src: "../public/food2.jpg",
      alert: "음식1",
      caption: "나는 음식1입니다.",
      heaer: "음식1",
    },
    {
      src: "../public/food3.jpg",
      alert: "음식1",
      caption: "나는 음식1입니다.",
      heaer: "음식1",
    },
    {
      src: "../public/food4.jpeg",
      alert: "음식1",
      caption: "나는 음식1입니다.",
      heaer: "음식1",
    },
  ];
  return <UncontrolledCarousel items={items} />;
};

export default ReactStrapCarousel;
