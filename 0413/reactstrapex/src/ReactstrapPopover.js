import {
  Button,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

const ReactstrapPopover = () => {
  return (
    <>
      <Button id="popover_id">Popover button</Button>
      <UncontrolledPopover placement="bottom" target="popover_id">
        <PopoverHeader>Reactstrap Popover</PopoverHeader>
        <PopoverBody>
          가을밤이 찾아와 그대를 비추고 또 나를 감싸네 눈을 감을 때마다 향기로운
          네 맘이 내게 전해지네 hmm 너는 무슨 생각해 나란히 누워서 저 별을
          바라볼 때면 나와 같은 마음인지는 몰라도 너와 함께 있는 이 순간이 난
          소중해 나랑 같이 걸을래 혹시 내일은 뭐해 네가 부담되지 않는 날에
          산책이라도 할래 그냥 날이 좋길래 너와 걷고 싶어져서 내일 많이 바쁘지
          않으면 혹시 나랑 같이 걸을래
        </PopoverBody>
      </UncontrolledPopover>
      <div>적재</div>
    </>
  );
};

export default ReactstrapPopover;
